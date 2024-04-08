import styles from "./CheckoutSuccess.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store.js";
import axios from "axios"; 

const CheckoutSuccess = () => {
	const clearCart = useStore((state) => state.clearCart);

	useEffect(() => {

    const eliminarCarrito = async () => {
      try {
        
        const cartToken = localStorage.getItem("cartToken");
        if (cartToken) {
          
          await axios.delete(`http://localhost:3001/deleteCarrito/${cartToken}`);
          console.log("Carrito eliminado correctamente");
        } else {
          console.error("No se encontró un token de carrito en el almacenamiento local");
        }
      } catch (error) {
        console.error("Error al eliminar el carrito:", error);
      }
    };

    
    eliminarCarrito();

   
    clearCart();
	}, [clearCart]);
	
	useEffect(()=>{
		localStorage.removeItem("cartToken")
	},[])
	//prettier-ignore
	return (
		<div className={styles.checkoutContainer}>
			<h2 className={styles.title}>Pago exitoso</h2>
			<p>Su pedido puede tardar algún tiempo en procesarse. ⌛</p>
			<p>
				Verifique el estado de su pedido en su perfil después de unos 10
				minutos. 👀
			</p>
			<p>
				En caso de cualquier consulta, comuníquese con el soporte en
				<strong>ecommerce@shop.com</strong>
			</p>
      <Link to={"/tienda"}>
			  <button className={styles.button}>Ir a página principal</button>
      </Link>
		</div>
	);
};

export default CheckoutSuccess;
