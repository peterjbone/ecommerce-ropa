import styles from "./Carrito.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store.js";
import PayButton from "../PayButton/PayButton.jsx";
import axios from 'axios';

const Carrito = () => {
    const removeFromCart = useStore((state) => state.removeFromCart);
    const incrementQuantity = useStore((state) => state.incrementQuantity);
    const decrementQuantity = useStore((state) => state.decrementQuantity);
    const getCart = useStore((state) => state.getCart);
    const setCart = useStore((state)=> state.setCart)
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
            {cart && cart.length > 1 && userInfo.id ? (
                <div className={styles.totalPriceContainer}>
                    <button onClick={VaciarCarrito} className={styles.vaciarCarrito}>Vaciar Carrito</button>
                    <p className={styles.totalPriceLabel}>Precio Total:</p>
                    <p className={styles.totalPrice}>${totalPrice}</p>
                    <PayButton cartItems={cart} userId={userInfo.id}/>
                </div>
            ) : (
                userInfo.id ? (
                    <div className={styles.totalPriceContainer}>
                        <p className={styles.totalPriceLabel}>Precio Total:</p>
                        <p className={styles.totalPrice}>${totalPrice}</p>
                        <PayButton cartItems={cart} userId={userInfo.id}/>
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
    );
};

export default Carrito;