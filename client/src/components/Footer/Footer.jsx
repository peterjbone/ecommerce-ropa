import styles from "./Footer.module.css";
import logo from "../../assets/images/nombre.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.item1}>
        <div className={styles.infoLinks}>
          <div>
            <h3>Nosotros</h3>
            <p>Nuestra historia</p>
            <p>Contáctanos</p>
            <p>Mapa del sitio</p>
          </div>
          <div>
            <h3>Tienda</h3>
            <p>Tarjetas de regalo</p>
            <p>Encuentra una tienda</p>
            <p>Cupones</p>
            <p>Descuentos</p>
            <p>App móvil</p>
          </div>
          <div>
            <h3>Ayuda </h3>
            <p>Términos del servicio</p>
            <p>Política de privacidad</p>
            <p>FAQ</p>
            <p>Accesibilidad</p>
          </div>
        </div>

        <div className={styles.subscribe}>
          <p>
            Suscribite al boletín informativo para saber cuando agregamos nuevos
            productos 👇
          </p>
          <div>
            <input type="text" placeholder="Tu correo electrónico" />
            <button type="button">Suscribirse</button>
          </div>
        </div>
      </div>

      <div className={styles.item2}>
        <img src={logo} alt="logo" width={174} height={29} />
        <p style={{ fontSize: "16px" }}>
          © 2024 ecommerce-ropa.com, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
}