const Producto = require("../models/Producto.js");

const getProductsInfo = async (request, response) => {
  try {
    const aggregationPipeline = [
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
      productOptions = {
        marcas: marcas.sort(),
        categorias: categorias.sort(),
        generos: generos.sort(),
        subcategorias: subcategorias.sort(),
        colores: colores.sort(),
        talles: talles.sort(),
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

    response.status(200).json(productOptions);
  } catch (error) {
    console.error("Error interno de ruta /infoProductos", error);
    response.status(500).json({ message: error.message });
  }
};

module.exports = getProductsInfo;