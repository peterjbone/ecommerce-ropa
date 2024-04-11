import styles from "./CheckoutSuccess.module.css";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
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
