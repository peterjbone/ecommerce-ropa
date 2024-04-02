import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Detail.module.css";
import { useStore } from "../../store";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useStore((state) => state.products);
  const productoDetail = useStore((state) => state.productoDetail);
  const getProductById = useStore((state) => state.getProductById);

  useEffect(() => {
    (async function getProduct() {
      try {
        await getProductById(id);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  // useEffect(() => {
  //   const filteredRelatedProducts = products.filter(
  //     (p) => p.id !== productoDetail._id
  //   );
  //   filteredRelatedProducts.sort(() => Math.random() - 0.5);
  //   const slicedRelatedProducts = filteredRelatedProducts.slice(0, 3);
  //   setRelatedProducts(slicedRelatedProducts);
  // }, [id, products, productoDetail]);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);


  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
    setSelectedSizeIndex(null);
  };

  const handleSizeChange = (index) => {
    setSelectedSizeIndex(index);
  };

  const editHandler = () => {
    navigate(`/editproduct/${id}`);
  };

  if (!productoDetail) {
    return (
      <div className={styles.notFound}>
        <h1 className={styles.notFoundError}>ERROR 404</h1>
        <p className={styles.notFoundText}>
          Esta no es la pagina que estas buscando
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.detailContainer}>
          <div className={styles.carouselContainer}>
            <AliceCarousel
              mouseTracking
              items={productoDetail.opciones[0].imagenes.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Imagen ${index + 1}`}
                  className={styles.productImage}
                />
              ))}
              autoPlay
              autoPlayInterval={3000}
              infinite
            />
          </div>
          <div className={styles.containerDatos}>
            <h2 className={styles.productName}>{productoDetail.nombre}</h2>
            <p className={styles.description}>
              <strong>Descripción:</strong> {productoDetail.descripcion}
            </p>
            <p className={styles.price}>
              <strong>Precio:</strong> ${productoDetail.precio}
            </p>

            <div className={styles.buttonsAndDetailsContainer}>
              <div className={styles.detailsContainer}>
                <h3 className={styles.nameColores}>Colores disponibles:</h3>
                <div className={styles.colorsList}>
                  {productoDetail.opciones.map((opcion, index) => {
                    const codHexadecimal = opcion.colores.codigosHex[0];
                    const isSelected = index === selectedColorIndex;

                    return (
                      <div
                        key={index}
                        className={`${styles.colorBox} ${isSelected ? styles.selectedColor : ""
                          }`}
                        style={{ backgroundColor: codHexadecimal }}
                        onClick={() => handleColorChange(index)}></div>
                    );
                  })}
                </div>

                <h3 className={styles.nameTallas}>Tallas disponibles:</h3>
                <div className={styles.sizesList}>
                  {productoDetail.opciones[selectedColorIndex].talles && productoDetail.opciones[selectedColorIndex].talles.map(
                    (tallaData, index) => {
                      const { talla, stock } = tallaData;
                      const isOutOfStock = stock === 0;
                      const isSelected = index === selectedSizeIndex;
                      return (
                        <div
                          key={index}
                          className={`${styles.sizeBox} ${isOutOfStock ? styles.outOfStock : ""
                            } ${isSelected ? styles.selectedSize : ""}`}
                          onClick={() => handleSizeChange(index)}
                          disabled={isOutOfStock}>
                          {talla}
                          <br />
                          (stock: {stock})
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <button className={styles.addToCartButton}>
                  Agregar al carrito
                </button>
                <button className={styles.buyButton}>Comprar</button>
                <button className={styles.buyButton} onClick={editHandler}>
                  Editar producto
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className={styles.productsRelacionados}>Productos relacionados</h2>
        <div className={styles.relatedProductsContainer}>
          {relatedProducts.map((relatedProduct) => (
            <Link
              to={`/${relatedProduct.id}`}
              key={relatedProduct.id}
              className={styles.relatedProductLink}>
              <div className={styles.relatedProduct}>
                <img
                  src={relatedProduct.imagen[0]}
                  alt={relatedProduct.nombre}
                  className={styles.relatedProductImage}
                />
                <h3 className={styles.relatedProductName}>
                  {relatedProduct.nombre}
                </h3>
                <p className={styles.relatedProductPrice}>
                  ${relatedProduct.precio}
                </p>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    );
  }
};

export default Detail;
