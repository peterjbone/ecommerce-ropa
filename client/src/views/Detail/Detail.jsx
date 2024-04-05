import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import HeroImagesBarDetail from '../../components/HeroImagesBar/HeroImagesBarDetail';
import { useStore } from '../../store';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productoDetail = useStore((state) => state.productoDetail);
  const getProductById = useStore((state) => state.getProductById);
  const addToCart = useStore((state) => state.addToCart);
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    (async function getProduct() {
      try {
        await getProductById(id);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        if (productoDetail && productoDetail.categoria) {
          const response = await axios.post('http://localhost:3001/productos', {
            categoria: [productoDetail.categoria],
            busqueda: ''
          });
          const filteredProducts = response.data.filteredProducts;
          const randomProducts = getRandomItems(filteredProducts, 8, id);
          setRelatedProducts(randomProducts);
        }
      } catch (error) {
        console.error("Error al obtener productos relacionados:", error);
      }
    };

    fetchRelatedProducts();
  }, [id]);


  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
    setSelectedSizeIndex(null);
  };

  const handleSizeChange = (index) => {
    setSelectedSizeIndex(index);
  };

  const handleAddToCart = () => {
    if (selectedSizeIndex !== null && selectedColorIndex !== null) {
      const selectedColor = productoDetail.opciones[selectedColorIndex].colores.nombres[0];
      const selectedSize = productoDetail.opciones[selectedColorIndex].tallas[selectedSizeIndex];

      if (selectedSize.stock > 0) {
        const variantId = `${productoDetail._id}-${selectedColor}-${selectedSize.talla}`;

        const selectedProduct = {
          id: productoDetail._id,
          nombre: productoDetail.nombre,
          descripcion: productoDetail.descripcion,
          marca: productoDetail.marca,
          categoria: productoDetail.categoria,
          genero: productoDetail.genero,
          subcategoria: productoDetail.subcategoria,
          precio: productoDetail.precio,
          imagen: productoDetail.opciones[selectedColorIndex].imagenes[0],
          opcion: {
            color: selectedColor,
            talla: selectedSize.talla,
            stock: selectedSize.stock
          },
          quantity: 1,
          variantId: variantId
        };

        addToCart(selectedProduct);

        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = storedCart.find(item => item.variantId === variantId);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          storedCart.push({ ...selectedProduct, variantId });
        }
        localStorage.setItem('cart', JSON.stringify(storedCart));

      } else {
        console.log('Esta talla está agotada');
      }
    } else {
      console.log('Por favor selecciona color y talla');
    }
  };

  const getRandomItems = (array, count, currentProductId) => {
    const shuffled = array
      .filter(product => product._id !== currentProductId)
      .sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
      <div className={styles.detailContainer}>
        {productoDetail && (
          <div className={styles.imagen}>
            <HeroImagesBarDetail product={productoDetail} selectedColorIndex={selectedColorIndex} />
          </div>
        )}

        <div className={styles.containerDatos}>
          <h2 className={styles.productName}>{productoDetail && productoDetail.nombre}</h2>
          <p><strong>Descripción:</strong> {productoDetail && productoDetail.descripcion}</p>
          <p><strong>Marca:</strong> {productoDetail && productoDetail.marca}</p>
          <p><strong>Género:</strong> {productoDetail && productoDetail.genero}</p>
          <p><strong>Categoria:</strong>{productoDetail && productoDetail.categoria}</p>
          <p><strong>SubCategoria:</strong> {productoDetail && productoDetail.subcategoria}</p>
          <p><strong>Precio:</strong> ${productoDetail && productoDetail.precio}</p>
          {productoDetail && productoDetail.oferta && (
            <p><strong>Oferta: </strong> {productoDetail.oferta.Descuento}% de descuento</p>
          )}

          <div>
            <h3>Opciones:</h3>
            {productoDetail && productoDetail.opciones && productoDetail.opciones.map((opcion, index) => (
              <div key={index}>
                <p>Color:</p>
                <div className={styles.colorsList}>
                  {opcion.colores.codigosHex.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className={`${styles.colorCircle} ${selectedColorIndex === index ? styles.selectedColor : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(index)}
                    ></div>

                  ))}
                </div>
                {selectedColorIndex === index && (
                  <div className={styles.sizeOptions}>
                    <p>Tallas disponibles:</p>
                    <div className={styles.sizeList}>
                      {opcion.tallas.map((tallaData, sizeIndex) => (
                        <div
                          key={sizeIndex}
                          className={`${styles.sizeItem} ${selectedSizeIndex === sizeIndex ? styles.selectedSize : ''}`}
                          onClick={() => handleSizeChange(sizeIndex)}
                        >
                          {tallaData.talla} (Stock: {tallaData.stock})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.buttonsContainer}>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Agregar al carrito</button>
            {storedCart.length === 0 && <button className={styles.buyButton}>Comprar</button>}
            <button className={styles.buyButton} onClick={editHandler}>
              Editar producto
            </button>
          </div>
        </div>
        <h2 className={styles.productsRelacionados}>Productos relacionados</h2>
        <div className={styles.relatedProductsContainer}>
          <div className={styles.relatedProductsWrapper}>
            <div className={styles.relatedProducts} >
              {relatedProducts.map((relatedProduct) => (
                <Link to={`/${relatedProduct._id}`} key={relatedProduct._id} className={styles.relatedProductLink}>
                  <div className={styles.relatedProduct}>
                    <img src={relatedProduct.opciones[0]?.imagenes[0]} alt={relatedProduct.nombre} className={styles.relatedProductImageLarge} />
                    <h3 className={styles.relatedProductName}>{relatedProduct.nombre}</h3>
                    <p className={styles.relatedProductPrice}>${relatedProduct.precio}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}