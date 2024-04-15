const Producto = require("../models/Producto.js");

const getProducts = async (request, response) => {
  try {
    const { busqueda, precioDesde, precioHasta, porcentajeDeOferta, esNuevo, marca, genero, categoria, subcategoria, color, talla, ordenado, ascendente, pagina, productosPorPagina } = request.body;

    let query = {};
    const searchTerms = busqueda.split(' ').map(term => `(?=.*${term})`).join('.*');
    const regex = new RegExp(`.*${searchTerms}.*`, 'i');
    query.$or = [
      { nombre: regex },
      { marca: regex },
      { descripcion: regex },
      { genero: regex },
      { categoria: regex },
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
      query['opciones.colores.nombres'] = { $in: color };
    }
    
    if (talla && talla.length > 0) {
      query['opciones.tallas'] = {
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
    let productOptions = {};
    if (result) {
      const { marcas, categorias, generos, subcategorias, colores, talles } = result;
      const productOptions = {
        marcas: marcas.sort(),
        categorias: categorias.sort(),
        generos: generos.sort(),
        subcategorias: subcategorias.sort(),
        colores: colores.sort(),
        talles: talles.sort()
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

    let sort = {};
    switch (ordenado) {
      case 'nombre':
        sort.nombre = ascendente ? 1 : - 1;
        break;
      case 'marca':
        sort.marca = ascendente ? 1 : - 1;
        break;
      case 'precio':
        sort.precio = ascendente ? 1 : - 1;
        break;
      case 'oferta':
        sort['oferta.Descuento'] = ascendente ? 1 : - 1;
        break;
      case 'genero':
        sort.genero = ascendente ? 1 : - 1;
        break;
      case 'categoria':
        sort.categoria = ascendente ? 1 : - 1;
        break;
      case 'subcategoria':
        sort.subcategoria = ascendente ? 1 : - 1;
        break;
      default:
        break;
    }
    const skip = (pagina - 1) * productosPorPagina;

    const count = await Producto.countDocuments(query);
    const filteredProducts = await Producto.find(query)
      .sort(sort)
      .skip(skip)
      .limit(productosPorPagina);

    response.status(200).json({ count, productOptions, filteredProducts });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /getProducts' });
  }
}

module.exports = getProducts;