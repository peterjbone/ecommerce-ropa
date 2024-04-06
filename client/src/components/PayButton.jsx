import axios from "axios";
const BACK_URL = `http://localhost:3001`;

//? Receptando productos del carrito y el id del usuario
function PayButton({ cartItems, userId }) {
	async function handleCheckout() {
		axios
			.post(`${BACK_URL}/api/stripe/create-checkout-session`, {
				cartItems,
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
      <button onClick={handleCheckout}>Comprar</button>
    </>
  );
}

export default PayButton;

//todo: COMO LLAMAR AL BOTON EN LA CART 👇
/*
    {auth._id ? (
      <PayButton cartItems={cart.cartItems} userId={auth._id} />
    ) : (
      <button
        onClick={() => navigate("/login")}
      >
        Inicia sesión para comprar
      </button>
    )}
*/
