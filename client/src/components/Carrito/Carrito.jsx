import styles from "./Carrito.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store.js";
import PayButton from "../PayButton/PayButton.jsx";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const navigate = useNavigate();
  const removeFromCart = useStore((state) => state.removeFromCart);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const getCart = useStore((state) => state.getCart);
  const setCart = useStore((state) => state.setCart)
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useStore((state) => state.cart);
  const cartToken = localStorage.getItem("cartToken");
  const userInfo = useStore((state) => state.userInfo);

  useEffect(() => {
    const cartToken = localStorage.getItem("cartToken");
    if (cartToken) {
      getCart(cartToken);
    }
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    if (cart) {
      for (const product of cart) {
        totalPrice += product.precio * product.quantity;
      }
    }
    const roundedTotalPrice = totalPrice.toFixed(2);
    setTotalPrice(roundedTotalPrice);
  }, [cart]);

  const VaciarCarrito = async () => {
    try {
      const confirm = window.confirm("¿Está seguro de que desea vaciar el carrito?")
      if (cartToken && confirm) {
        await axios.put(`http://localhost:3001/vaciarCarrito/${cartToken}`);
        console.log("Carrito eliminado correctamente");
        setCart([]);
      } else {
        console.error("No se encontró un token de carrito en el almacenamiento local");
      }
    } catch (error) {
      console.error("Error al eliminar el carrito:", error);
    }
  };

  const handleRemoveFromCart = (variantId) => {
    const cartToken = localStorage.getItem("cartToken");
    const confirmDelete = window.confirm("¿Está seguro de que desea eliminar este producto?");
    if (confirmDelete) {
      removeFromCart(variantId, cartToken);
    }
  };

  const incrementQuantityAndSave = (variantId) => {
    const product = cart.find((item) => item.variantId === variantId);
    if (product) {
      const { opcion, quantity } = product;
      const stock = opcion.stock;
      if (quantity < stock) {
        incrementQuantity(variantId, cartToken);
      } else {
        console.log("No hay stock");
      }
    }
  };

  const decrementQuantityAndSave = (variantId) => {
    const product = cart.find((item) => item.variantId === variantId);
    if (product && product.quantity > 0) {
      decrementQuantity(variantId, cartToken);
      if (product.quantity === 1) {
        const confirmDelete = window.confirm("¿Está seguro de que desea eliminar este producto?");
        if (confirmDelete) {
          removeFromCart(variantId, cartToken);
        } else {
          incrementQuantity(variantId, cartToken);
        }
      }
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Mi Carrito 🛒</h1>
      {/* CARRITO VACIO */}
      {cart?.length === 0 ? (
        <div className={styles.cartEmpty}>
          <p>Tu carrito esta vacío por el momento.</p>
          <div className={styles.startShopping}>
            <Link to={"/tienda"}>
              <FaArrowLeft size={30} />
              <span>Comienza a comprar 💲</span>
            </Link>
          </div>
        </div>
      ) : (
        // CARRITO CON PRODUCTOS
        <div>
          {/*----------------------- TITULOS  ---------------------------*/}
          <div className={styles.titles}>
            <h3 className={styles.productTitle}>Producto</h3>
            <h3 className={styles.price}>Precio</h3>
            <h3 className={styles.quantity}>Cantidad</h3>
            <h3 className={styles.total}>Total</h3>
          </div>
          {/*------------------ ITEMS DEL CARRITO -----------------*/}
          <div className={styles.cartItems}>
            {cart &&
              cart.map((cartItem) => (
                <div
                  className={styles.cartItem}
                  key={cartItem._id + cartItem.color}>
                  {/* Producto */}
                  <div className={styles.cartProduct}>
                    <img src={cartItem.imagen} alt={cartItem.nombre} />
                    <div>
                      <h3
                        style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                        {cartItem.nombre.toUpperCase()}
                      </h3>
                      <p
                        style={{
                          fontSize: "1.10rem",
                          lineHeight: "1.75rem",
                          fontWeight: "800"
                        }}>
                        Marca: {cartItem.marca}
                      </p>
                      <p
                        style={{
                          fontSize: "1.10rem",
                          lineHeight: "1.75rem"
                        }}>
                        Talla seleccionada: {cartItem.opcion.talla}
                      </p>
                      <p
                        style={{
                          fontSize: "1.10rem",
                          lineHeight: "1.75rem"
                        }}>
                        Color seleccionados: 
                        <span
                          style={{
                            fontSize: "1.25rem",
                            lineHeight: "1.75rem",
                            fontWeight: "600"
                          }}>
                           {cartItem.opcion.color}
                        </span>
                      </p>
                      <button
                        className={styles.deleteBtn}
                        onClick={() =>
                          handleRemoveFromCart(cartItem.variantId)
                        }>
                        Eliminar
                      </button>
                    </div>
                  </div>
                  {/* Precio individual */}
                  <div>${cartItem.precio}</div>
                  {/* Cantidad */}
                  <div className={styles.cartProductQuantity}>
                    <button
                      style={{ fontSize: "1.5rem" }}
                      onClick={() =>
                        decrementQuantityAndSave(cartItem.variantId)
                      }>
                      -
                    </button>
                    <div className={styles.count}>{cartItem.quantity}</div>
                    <button
                      style={{ fontSize: "1.5rem" }}
                      onClick={() =>
                        incrementQuantityAndSave(cartItem.variantId)
                      }>
                      +
                    </button>
                  </div>
                  {/* Precio total */}
                  <div className={styles.cartProductTotalPrice}>
                    ${(cartItem.precio * cartItem.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          {/*----------------- RESUMEN DEL CARRITO --------------------*/}
          <div className={styles.cartSummary}>
            {/* Boton para limpiar el carrito */}
            <button className={styles.clearBtn} onClick={() =>  VaciarCarrito() }>
              Vaciar carrito
            </button>
            {/* Boton de Pago */}
            <div className={styles.cartCheckout}>
              <div className={styles.subtotal}>
                <span>Subtotal :</span>
                <span className={styles.amount}>${totalPrice}</span>
              </div>

              <p
                style={{
                  margin: "1.2rem 0",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#111"
                }}>
                Impuestos y envío calculados al finalizar la compra
              </p>

              {userInfo?.email ? (
                <PayButton cartItems={cart} userId={userInfo?._id} />
              ) : (
                <button
                  className={styles.cartLogin}
                  onClick={() => navigate("/login")}>
                  Iniciar sesión para hacer <br /> el pago
                </button>
              )}

              <div className={styles.continueShopping}>
                <Link to={"/tienda"}>
                  <FaArrowLeft size={30} color="#0aad0a" />
                  <span>Seguir comprando</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;

//********************* CART DE JULIA

/*
<div className={styles.cartContainer}>
    <h2 className={styles.title}>Carrito de Compras</h2>
    {cart?.length === 0 ? (
      <p className={styles.emptyCart}>No hay productos en el carrito.</p>
    ) : (
      <div className={styles.productContainer}>
        {cart?.map((product) => (
          <div key={product.variantId} className={styles.productItem}>
            <div className={styles.productDetails}>
              <div>
                <h3 className={styles.productName}>{product.nombre}</h3>
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productActions}>
                <div className={styles.caracteristicas}>
                  <p className={styles.productGenero}>
                    <strong>Género:</strong>
                    {product.genero}
                  </p>
                  <p className={styles.productColor}>
                    <strong>Color:</strong>
                    {product.opcion.color}
                  </p>
                  <p className={styles.productSize}>
                    <strong>Talla:</strong> {product.opcion.talla}
                  </p>
                  <p className={styles.productStock}>
                    <strong>Stock:</strong> {product.opcion.stock}
                  </p>
                  <p className={styles.productPrice}>
                    {product.oferta && product.oferta.Descuento > 0 ? (
                      <span className={styles.discountPrice}>
                        <strong>Precio con Descuento: </strong>
                        <span className={styles.originalPrice}>${product.precioOriginal}</span>
                        <span className={styles.discountPercentage}>-{product.oferta.Descuento}%</span>
                        <br />
                        <strong>Precio Final: </strong>
                        <span className={styles.finalPrice}>${product.precio.toFixed(2)}</span>
                      </span>
                    ) : (
                      <span className={styles.price}>
                        <strong>Precio: </strong>
                        ${product.precio}
                      </span>
                    )}
                  </p>
                </div>
                <div className={styles.quantityButtons}>
                  <button
                    onClick={() => decrementQuantityAndSave(product.variantId)}
                    className={styles.quantityButton}>
                    -
                  </button>
                  <p className={styles.productQuantity}>{product.quantity}</p>
                  <button
                    onClick={() => incrementQuantityAndSave(product.variantId)}
                    className={styles.quantityButton}>
                    +
                  </button>
                  <p className={styles.productTotalPrice}>
                    <strong>Precio Total: </strong>${(product.precio * product.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.variantId)}
                  className={styles.removeButton}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    {cart && cart.length > 1 && userInfo ? (
      <div className={styles.totalPriceContainer}>
        <button onClick={VaciarCarrito} className={styles.vaciarCarrito}>Vaciar Carrito</button>
        <p className={styles.totalPriceLabel}>Precio Total:</p>
        <p className={styles.totalPrice}>${totalPrice}</p>
        <PayButton cartItems={cart} userId={userInfo._id} />
      </div>
    ) : (
      userInfo ? (
        <div className={styles.totalPriceContainer}>
          <p className={styles.totalPriceLabel}>Precio Total:</p>
          <p className={styles.totalPrice}>${totalPrice}</p>
          <PayButton cartItems={cart} userId={userInfo._id} />
        </div>
      ) : (
        <Link to={"/login"}>
          <button className={`${styles.buttonLogin}`}>
            Iniciar sesión para Comprar
          </button>
        </Link>
      )
    )}
  </div>
*/