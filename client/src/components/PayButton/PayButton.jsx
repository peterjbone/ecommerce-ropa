import axios from "axios";
const BACK_URL = `http://localhost:3001`;
import styles from "./PayButton.module.css";

//? Receptando productos del carrito y el id del usuario
function PayButton({ cartItems, userId }) {
	//* formateando el cartItems para Stripe
	const formatCart = cartItems.map((item) => {
		return {
			_id: item._id,
			nombre: item.nombre,
			marca: item.marca,
			descripcion: item.descripcion,
			precio: item.precio,
			color: item.opcion.color,
			talla: item.opcion.talla,
			imagen: item.imagen,
			quantity: item.quantity
		};
	});

	//* Función que maneja el pago
	async function handleCheckout() {
		axios
			.post(`${BACK_URL}/api/stripe/create-checkout-session`, {
				formatCart,
				userId
			})
			.then((res) => {
				if (res.data.url) {
					window.location.href = res.data.url;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//* -------------------------------- COMPONENTE PAYBUTTON ---------------------------
	/* prettier-ignore */
	return (
    <>
      <button
        className={`${styles.buttonComprar} ${cartItems.length === 0 && styles.disabled}`}
        disabled={cartItems.length === 0}
        onClick={handleCheckout}>
        Comprar
      </button>
    </>
  );
}

export default PayButton;
