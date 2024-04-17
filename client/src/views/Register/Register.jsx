import styles from "./Register.module.css";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "../../store";

export default function Register() {
	const navigate = useNavigate();
	const register = useStore((state) => state.register);
	// datos del usuario
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: ""
	});
	// errores
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: ""
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
		setErrors(
			validation({
				...user,
				[name]: value
			})
		);
	};

	const validation = (user) => {
		const errors = {};
		const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
		const emailRegex =
			/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

		if (user.name && !nameRegex.test(user.name)) {
			errors.name = "Debe ser un nombre válido";
		}
		if (user.email && !emailRegex.test(user.email)) {
			errors.email = "Debe ser un Email válido";
		}
		if (
			user.password &&
			(user.password.length < 8 || user.password.length > 20)
		) {
			errors.password = "La contraseña debe tener entre 8 y 20 caracteres";
		}

		return errors;
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await register(user.name, user.email, user.password);
			toast.success("Cuenta creada correctamente", {
				onClose: () => {
					navigate("/login");
				},
				autoClose: 2000
			});
			setUser({
				name: "",
				email: "",
				password: ""
			});
		} catch (error) {
			console.log(error);
			toast.error("Error al crear cuenta");
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Crea una cuenta</h1>
			<form className={styles.form} onSubmit={submitHandler}>
				{/* INPUT DE NAME */}
				<input
					className={styles.input}
					name="name"
					type="text"
					value={user.name}
					placeholder="Nombre"
					onChange={changeHandler}
				/>
				{errors.name && (
					<p
						style={{
							color: "red",
							marginTop: "-6px",
							marginBottom: "10px"
						}}>
						{errors.name}
					</p>
				)}

				{/* INPUT DE CORREO */}
				<input
					className={styles.input}
					name="email"
					type="email"
					value={user.email}
					placeholder="Email"
					onChange={changeHandler}
				/>
				{errors.email && (
					<p
						style={{
							color: "red",
							marginTop: "-6px",
							marginBottom: "10px"
						}}>
						{errors.email}
					</p>
				)}

				{/* INPUT DE PASSWORD */}
				<input
					className={styles.input}
					name="password"
					value={user.password}
					type="password"
					placeholder="Contraseña"
					onChange={changeHandler}
				/>
				{errors.password && (
					<p
						style={{
							color: "red",
							marginTop: "-6px",
							marginBottom: "10px"
						}}>
						{errors.password}
					</p>
				)}

				<button
					className={
						!user.name ||
						!user.email ||
						!user.password ||
						errors.name ||
						errors.email ||
						errors.password
							? styles.buttonDisabled
							: styles.button
					}
					type="submit"
					disabled={
						!user.name ||
						!user.email ||
						!user.password ||
						errors.name ||
						errors.email ||
						errors.password
					}>
					Crear cuenta
				</button>
				<Link to="/login">
					<span className={styles.span}>¿Ya tienes cuenta? Inicia sesión</span>
				</Link>
				<ToastContainer />
			</form>
		</div>
	);
}
