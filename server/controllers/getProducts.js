const Producto = require("../models/Producto.js");

const getProducts = async (request, response) => {
  try {
    const { busqueda, precioDesde, precioHasta, porcentajeDeOferta, esNuevo, marca, genero, categoria, subcategoria, color, talla, ordenado, ascendente, pagina } = request.body;

    const searchTerms = busqueda.split(' ').map(term => new RegExp(term, 'i'));


    const matchStage = {
      $or: [
        { nombre: { $in: searchTerms } },
        { marca: { $in: searchTerms } },
        { descripcion: { $in: searchTerms } },
        { genero: { $in: searchTerms } },
        { categoria: { $in: searchTerms } },
        { subcategoria: { $in: searchTerms } },
      ]
    };

    if (precioDesde || precioHasta) {
      matchStage.precio = {};
      if (precioDesde) {
        matchStage.precio.$gte = precioDesde;
      }
      if (precioHasta) {
        matchStage.precio.$lte = precioHasta;
      }
    }

    if (porcentajeDeOferta) {
      matchStage['oferta.Descuento'] = porcentajeDeOferta;
    }

    if (typeof esNuevo === 'boolean') {
      matchStage.productoNuevo = esNuevo;
    }

    if (marca && marca.length > 0) {
      matchStage.marca = { $in: marca };
    }

    if (genero && genero.length > 0) {
      matchStage.genero = { $in: genero };
    }

    if (categoria && categoria.length > 0) {
      matchStage.categoria = { $in: categoria };
    }

    if (subcategoria && subcategoria.length > 0) {
      matchStage.subcategoria = { $in: subcategoria };
    }

    const matchColorStage = {};
    if (color && color.length > 0) {
      matchColorStage['opciones.color'] = { $in: color };
    }

    const matchTallaStage = {};
    if (talla && talla.length > 0) {
      matchTallaStage['opciones.talles.talle'] = { $in: talla };
    }

    const sort = {};
    switch (ordenado) {
      case 'nombre':
        sort.nombre = ascendente ? 1 : -1;
        break;
      case 'marca':
        sort.marca = ascendente ? 1 : -1;
        break;
      case 'precio':
        sort.precio = ascendente ? 1 : -1;
        break;
      case 'oferta':
        sort['oferta.Descuento'] = ascendente ? 1 : -1;
        break;
      case 'genero':
        sort.genero = ascendente ? 1 : -1;
        break;
      case 'categoria':
        sort.categoria = ascendente ? 1 : -1;
        break;
      default:
        break;
    }

    const skip = (pagina - 1) * 20;

    const lookupImagensStage = {
      $lookup: {
        from: 'imagens',
        localField: '_id',
        foreignField: 'producto_id',
        as: 'opciones'
      }
    };
    const unwindOpcionesStage = {
      $unwind: '$opciones'
    };
    const lookupColorsStage = {
      $lookup: {
        from: 'colors',
        localField: 'opciones.color_id',
        foreignField: '_id',
        as: 'color'
      }
    };
    const unwindColorStage = {
      $unwind: '$color'
    };
    const lookupStocksStage = {
      $lookup: {
        from: 'stocks',
        let: { producto_id: '$_id', color_id: '$opciones.color_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$producto_id', '$$producto_id'] },
                  { $eq: ['$color_id', '$$color_id'] }
                ]
              }
            }
          },
          {
            $lookup: {
              from: 'talles',
              localField: 'talle_id',
              foreignField: '_id',
              as: 'talle'
            }
          },
          {
            $project: {
              'talle': { $arrayElemAt: ['$talle.nombre', 0] },
              'stock': 1,
              '_id': 0
            }
          },
          {
            $unwind: '$talle'
          }
        ],
        as: 'stocks'
      }
    };
    const groupStage = {
      $group: {
        _id: '$_id',
        nombre: { $first: '$nombre' },
        marca: { $first: '$marca' },
        descripcion: { $first: '$descripcion' },
        precio: { $first: '$precio' },
        oferta: { $first: '$oferta' },
        activo: { $first: '$activo' },
        productoNuevo: { $first: '$productoNuevo' },
        genero: { $first: '$genero' },
        categoria: { $first: '$categoria' },
        subcategoria: { $first: '$subcategoria' },
        opciones: {
          $push: {
            color: '$color.nombre',
            codigoHex: '$color.codigoHex',
            imagenes: '$opciones.imagenes',
            talles: '$stocks'
          }
        }
      }
    };
    const mainPipeline = [
      lookupImagensStage,
      unwindOpcionesStage,
      lookupColorsStage,
      unwindColorStage,
      lookupStocksStage,
      groupStage,
      {
        $match: matchStage
      },
      {
        $match: matchColorStage
      },
      {
        $match: matchTallaStage
      },
      {
        $sort: sort
      },
      {
        $skip: skip
      },
      {
        $limit: 20
      }
    ];
    const countPipeline = [
      lookupImagensStage,
      unwindOpcionesStage,
      lookupColorsStage,
      unwindColorStage,
      lookupStocksStage,
      groupStage,
      {
        $match: matchStage
      },
      {
        $match: matchColorStage
      },
      {
        $match: matchTallaStage
      },
      {
        $count: "totalCount"
      },
    ];
    const availablePipeline = [
      lookupImagensStage,
      unwindOpcionesStage,
      lookupColorsStage,
      unwindColorStage,
      lookupStocksStage,
      groupStage,
      {
        $unwind: "$opciones"
      },
      {
        $group: {
          _id: null,
          marcas: { $addToSet: "$marca" },
          categorias: { $addToSet: "$categoria" },
          generos: { $addToSet: "$genero" },
          subcategorias: { $addToSet: "$subcategoria" },
          colores: { $addToSet: "$opciones.color" },
          talles: { $addToSet: "$opciones.talles.talle" }
        }
      },
      {
        $project: {
          marcas: 1,
          categorias: 1,
          generos: 1,
          subcategorias: 1,
          colores: { $setUnion: ["$colores"] },
          talles: {
            $reduce: {
              input: "$talles",
              initialValue: [],
              in: { $setUnion: ["$$value", "$$this"] }
            }
          }
        }
      }
    ];

    const filteredProducts = await Producto.aggregate(mainPipeline);
    const countResult = await Producto.aggregate(countPipeline);
    const count = countResult[0] ? countResult[0].totalCount : 0;
    const [result] = await Producto.aggregate(availablePipeline);

    let productOptions = {};
    if (result) {
      const { marcas, categorias, generos, subcategorias, colores, talles } = result;
      productOptions = {
        marcas,
        categorias,
        generos,
        subcategorias,
        colores,
        talles,
      };
    } else {
      productOptions = {
        marcas: [],
        categorias: [],
        generos: [],
        subcategorias: [],
        colores: [],
        talles: [],
      };
    }

    response.status(200).json({ count, productOptions, filteredProducts });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /getProducts' });
  }
}

module.exports = getProducts;


// const mainPipeline = [
//   {
//     $lookup: {
//       from: 'imagens',
//       localField: '_id',
//       foreignField: 'producto_id',
//       as: 'opciones'
//     }
//   },
//   {
//     $unwind: '$opciones'
//   },
//   {
//     $lookup: {
//       from: 'colors',
//       localField: 'opciones.color_id',
//       foreignField: '_id',
//       as: 'color'
//     }
//   },
//   {
//     $unwind: '$color'
//   },
//   {
//     $lookup: {
//       from: "stocks",
//       let: { producto_id: "$_id", color_id: "$opciones.color_id" },
//       mainPipeline: [
//         {
//           $match: {
//             $expr: {
//               $and: [
//                 { $eq: ["$producto_id", "$$producto_id"] },
//                 { $eq: ["$color_id", "$$color_id"] }
//               ]
//             }
//           }
//         },
//         {
//           $lookup: {
//             from: "talles",
//             localField: "talle_id",
//             foreignField: "_id",
//             as: "talle"
//           }
//         },
//         {
//           $project: {
//             "talle": { $arrayElemAt: ["$talle.nombre", 0] },
//             "stock": 1,
//             "_id": 0
//           }
//         },
//         {
//           $unwind: '$talle'
//         }
//       ],
//       as: "stocks"
//     }
//   },
//   {
//     $group: {
//       _id: '$_id',
//       nombre: { $first: '$nombre' },
//       marca: { $first: '$marca' },
//       descripcion: { $first: '$descripcion' },
//       precio: { $first: '$precio' },
//       oferta: { $first: '$oferta' },
//       activo: { $first: '$activo' },
//       productoNuevo: { $first: '$productoNuevo' },
//       genero: { $first: '$genero' },
//       categoria: { $first: '$categoria' },
//       subcategoria: { $first: '$subcategoria' },
//       opciones: {
//         $push: {
//           color: '$color.nombre',
//           codigoHex: '$color.codigoHex',
//           imagenes: '$opciones.imagenes',
//           talles: '$stocks'
//         }
//       }
//     }
//   },
//   {
//     $match: matchStage
//   },
//   {
//     $match: matchColorStage
//   },
//   {
//     $match: matchTallaStage
//   },
//   {
//     $sort: sort
//   },
//   // {
//   //   $skip: skip
//   // },
//   // {
//   //   $limit: 20
//   // }
// ];