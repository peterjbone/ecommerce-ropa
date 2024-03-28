const Producto = require("../models/Producto.js");

const getProducts = async (request, response) => {
  try {
    const { busqueda, precioDesde, precioHasta, porcentajeDeOferta, esNuevo, marca, genero, categoria, subcategoria, color, talla, ordenadoPor, ascendente, pagina } = request.body;

    // const busqueda = '';
    // const precioDesde = 0;
    // const precioHasta = 0;
    // const porcentajeDeOferta = 0;
    // const esNuevo = undefined;
    // const categoria = ['adultos'];
    // const genero = [];
    // const subcategoria = [];
    // const color = ['cafe'];
    // const talla = ['M'];
    // const ordenadoPor = 'precio';
    // const ascendente = true;
    // const pagina = 1;

    let query = {};
    const searchTerms = busqueda.split(' ').map(term => `(?=.*${term})`).join('.*');
    const regex = new RegExp(`.*${searchTerms}.*`, 'i');
    query.$or = [
      { nombre: regex },
      { marca: regex },
      { descripcion: regex },
      { categoria: regex },
      { genero: regex },
      { subcategoria: regex },
    ];
    if (precioDesde || precioHasta) {
      query.precio = {};
      if (precioDesde) {
        query.precio.$gte = precioDesde;
      }
      if (precioHasta) {
        query.precio.$lte = precioHasta;
      }
    }
    if (porcentajeDeOferta) {
      query['oferta.Descuento'] = porcentajeDeOferta;
    }
    if (typeof esNuevo === 'boolean') {
      query.productoNuevo = esNuevo;
    }
    if (marca && marca.length > 0) {
      query.marca = { $in: marca };
    }
    if (genero && genero.length > 0) {
      query.genero = { $in: genero };
    }
    if (categoria && categoria.length > 0) {
      query.categoria = { $in: categoria };
    }
    if (subcategoria && subcategoria.length > 0) {
      query.subcategoria = { $in: subcategoria };
    }
    if (color && color.length > 0) {
      query['opciones.0.colores.nombres'] = { $in: color };
    }
    if (talla && talla.length > 0) {
      query['opciones.0.tallas'] = {
        $elemMatch: { talla: { $in: talla } }
      };
    }

    const aggregationPipeline = [
      { $match: query },
      {
        $group: {
          _id: null,
          marcas: { $addToSet: "$marca" },
          categorias: { $addToSet: "$categoria" },
          generos: { $addToSet: "$genero" },
          subcategorias: { $addToSet: "$subcategoria" },
          colores: { $addToSet: "$opciones.colores.nombres" },
          talles: { $addToSet: "$opciones.tallas.talla" }
        }
      },
      {
        $project: {
          marcas: 1,
          categorias: 1,
          generos: 1,
          subcategorias: 1,
          colores: {
            $reduce: {
              input: {
                $reduce: {
                  input: "$colores",
                  initialValue: [],
                  in: { $concatArrays: ["$$value", "$$this"] }
                }
              },
              initialValue: [],
              in: { $concatArrays: ["$$value", "$$this"] }
            }
          },
          talles: {
            $reduce: {
              input: {
                $reduce: {
                  input: "$talles",
                  initialValue: [],
                  in: { $concatArrays: ["$$value", "$$this"] }
                }
              },
              initialValue: [],
              in: { $concatArrays: ["$$value", "$$this"] }
            }
          }
        }
      },
      {
        $project: {
          marcas: 1,
          categorias: 1,
          generos: 1,
          subcategorias: 1,
          colores: {
            $setUnion: ["$colores"]
          },
          talles: {
            $setUnion: ["$talles"]
          }
        }
      }
    ];

    const [result] = await Producto.aggregate(aggregationPipeline);
    const { marcas, categorias, generos, subcategorias, colores, talles } = result;

    const productOptions = {
      marcas,
      categorias,
      generos,
      subcategorias,
      colores,
      talles
    };

    let sort = {};
    switch (ordenadoPor) {
      case 'Nombre':
        sort.nombre = ascendente ? 1 : - 1;
        break;
      case 'Marca':
        sort.marca = ascendente ? 1 : - 1;
        break;
      case 'Precio':
        sort.precio = ascendente ? 1 : - 1;
        break;
      case 'Oferta':
        sort['oferta.Descuento'] = ascendente ? 1 : - 1;
        break;
      case 'Genero':
        sort.genero = ascendente ? 1 : - 1;
        break;
      case 'Categoria':
        sort.categoria = ascendente ? 1 : - 1;
        break;
      case 'Subcategoria':
        sort.subcategoria = ascendente ? 1 : - 1;
        break;
      default:
        break;
    }
    const pageSize = 20;
    const skip = (pagina - 1) * pageSize;

    const count = await Producto.countDocuments(query);
    const filteredProducts = await Producto.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);

    response.status(200).json({ count, productOptions, filteredProducts });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /getProducts' });
  }
}

module.exports = getProducts;