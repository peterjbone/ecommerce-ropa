import styles from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store";

export default function Login() {
	const navigate = useNavigate();
	const login = useStore((state) => state.login);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await login(user.email, user.password, false);

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
	};

	//* Para ver la info de usuario
	// const userInfo = useStore((state) => state.userInfo);
	// console.log(userInfo);

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
				/>
				<input
					className={styles.input}
					name="password"
					value={user.password}
					type="password"
					placeholder="Contraseña"
					onChange={changeHandler}
				/>
				 <Link to="/forgot-password" className={styles.link}>¿Olvidaste tu contraseña?</Link>
				<button className={styles.button} type="submit">
					Iniciar sesión
				</button>
				<Link to="/register">
					<span className={styles.span}>¿No tienes cuenta? Registrate</span>
				</Link>
				<ToastContainer />
			</form>
		</div>
	);
}
