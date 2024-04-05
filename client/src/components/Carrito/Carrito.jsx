import { useEffect, useState } from 'react';
import styles from "./Carrito.module.css";
import { useStore } from '../../store.js';

const Carrito = () => {
  const removeFromCart = useStore((state) => state.removeFromCart);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const setCart = useStore((state) => state.setCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useStore((state) => state.cart);
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice += product.precio * product.quantity;
    }
    const roundedTotalPrice = totalPrice.toFixed(2);
    setTotalPrice(roundedTotalPrice);
}, [cart]);


  const handleRemoveFromCart = (variantId) => {
    removeFromCart(variantId);
    const updatedCart = cart.filter(product => product.variantId !== variantId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const incrementQuantityAndSave = (variantId) => {
    const product = cartData.find((item) => item.variantId === variantId);
    if (product) {
      const { opcion, quantity } = product;
      const stock = opcion.stock; 
      if (quantity < stock) {
        incrementQuantity(variantId);
        const updatedCart = cartData.map((item) => {
          if (item.variantId === variantId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
      } else {
        console.log('No hay stock');
      }
    }
  };

  const decrementQuantityAndSave = (variantId) => {
    const product = cartData.find((item) => item.variantId === variantId);
    if (product && product.quantity > 0) {
      decrementQuantity(variantId);
      const updatedCart = cartData.map((item) => {
        if (item.variantId === variantId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Carrito de Compras</h2>
      {cartData.length === 0 ? (
        <p className={styles.emptyCart}>No hay productos en el carrito.</p>
      ) : (
        <div className={styles.productContainer}>
          {cartData.map(product => (
            <div key={product.variantId} className={styles.productItem}>
              <div className={styles.productDetails}>
                <div>
                  <h3 className={styles.productName}>{product.nombre}</h3>
                  <img src={product.imagen} alt={product.nombre} className={styles.productImage} />
                </div>
                <div className={styles.productActions}>
                  <div className={styles.caracteristicas}> 
                    <p className={styles.productGenero}><strong>Género:</strong>{product.genero}</p>
                    <p className={styles.productColor}><strong>Color:</strong>{product.opcion.color}</p>
                    <p className={styles.productSize}><strong>Talla:</strong> {product.opcion.talla}</p>
                    <p className={styles.productStock}><strong>Stock:</strong> {product.opcion.stock}</p>
                    <p className={styles.productPrice}><strong>Precio Unitario:  </strong> ${ product.precio}</p>
                  </div>
                  <div className={styles.quantityButtons}>
                    <button onClick={() => decrementQuantityAndSave(product.variantId)} className={styles.quantityButton}>-</button>
                    <p className={styles.productQuantity}>{product.quantity}</p>
                    <button onClick={() => incrementQuantityAndSave(product.variantId)} className={styles.quantityButton}>+</button>
                    <p className={styles.productTotalPrice}><strong>Precio Total: </strong>${(product.precio * product.quantity).toFixed(2)}</p>

                  </div>
                  <button onClick={() => handleRemoveFromCart(product.variantId)} className={styles.removeButton}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.totalPriceContainer}>
        <p className={styles.totalPriceLabel}>Precio Total:</p>
        <p className={styles.totalPrice}>${totalPrice}</p>
        <button className={`${styles.buttonComprar} ${cartData.length === 0 && styles.disabled}`} disabled={cartData.length === 0}>Comprar</button>
      </div>
    </div>
  );
};

export default Carrito;
