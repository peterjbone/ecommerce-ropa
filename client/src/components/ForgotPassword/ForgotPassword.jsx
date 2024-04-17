import { useState } from "react";
import axios from "axios";
import styles from "./ForgotPassword.module.css";
const { BACK_URL } = process.env;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACK_URL}/auth/forgot-password`, { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h1>Restablecer Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
