import styles from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useStore } from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const login = useStore((state) => state.login);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({ 
    email: "",
    password: "",
  });

  const validation = (user/* , direccion */) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

    if (user.name && !nameRegex.test(user.name)) {
      errors.name = "Debe ser un nombre válido";
    }
    if (user.email && !emailRegex.test(user.email)) {
      errors.email = "Debe ser un Email válido";
    }
    if (user.password && (user.password.length < 8 || user.password.length > 16)) {
      errors.password = "La contraseña debe tener entre 8 y 16 caracteres";
    }

    return errors
  }

  const handleInputBlur = (e) => {
    const { name, value } = e.target

    setErrors(validation({
      ...user,
      [name]: value,
    }));
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const googleSignInHandler = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      toast.error("Error al iniciar sesión con Google");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password, false);
      toast.success("Iniciaste sesión correctamente", {
        onClose: () => {
          navigate("/");
        },
        autoClose: 1000
      });
      setUser({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entra a tu cuenta</h1>
      <strong>Ingresa tu correo y contraseña</strong>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.input}
          name="email"
          type="email"
          value={user.email}
          placeholder="Email"
          onChange={changeHandler}
          onBlur={handleInputBlur}
        />
        <p className={errors.email ? "" : "invisible"} >{errors.email ? `${errors.email}` : "invisible"}</p>

        <input
          className={styles.input}
          name="password"
          value={user.password}
          type="password"
          placeholder="Contraseña"
          onChange={changeHandler}
          onBlur={handleInputBlur}
        />
        <p className={errors.password ? "" : "invisible"} >{errors.password ? `${errors.password}` : "invisible"}</p>

        <Link to="/forgot-password" className={styles.link}>¿Olvidaste tu contraseña?</Link>
        <button className={styles.button} type="submit">
          Iniciar sesión
        </button>
        <button className={styles.googleButton} onClick={googleSignInHandler}>
          Iniciar sesión con Google
        </button>
        <Link to="/register">
          <span className={styles.span}>¿No tienes cuenta? Registrate</span>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
}
