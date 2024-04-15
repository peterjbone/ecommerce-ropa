import styles from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const login = useStore((state) => state.login);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({ 
    email: '',
    password: '',
  });

  const validation = (user/* , direccion */) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

    if (user.name && !nameRegex.test(user.name)) {
      errors.name = 'Debe ser un nombre válido';
    }
    if (user.email && !emailRegex.test(user.email)) {
      errors.email = 'Debe ser un Email válido';
    }
    if (user.password && (user.password.length < 8 || user.password.length > 16)) {
      errors.password = 'La contraseña debe tener entre 8 y 16 caracteres';
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
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await login(user.email, user.password);

      toast.success("Iniciaste sesión", {
        onClose: () => {
          navigate("/");
        },
        autoClose: 1000
      });

      setUser({
        fullname: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        address: ""
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <strong>Ingresa tu usuario y contraseña</strong>

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
        <p className={errors.email ? '' : 'invisible'} >{errors.email ? `${errors.email}` : 'invisible'}</p>

        <input
          className={styles.input}
          name="password"
          value={user.password}
          type="password"
          placeholder="Contraseña"
          onChange={changeHandler}
          onBlur={handleInputBlur}
        />
        <p className={errors.password ? '' : 'invisible'} >{errors.password ? `${errors.password}` : 'invisible'}</p>

        <span className={styles.span}>¿Olvidaste tu contraseña?</span>
        <button className={styles.button} type="submit">
          Login
        </button>
        <Link to="/register">
          <span className={styles.span}>¿No tienes cuenta? Registrate</span>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
}
