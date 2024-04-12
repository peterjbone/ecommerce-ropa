import styles from './Register.module.css'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from '../../store';
import { auth } from '../../firebase/firebase.js'; // Importa la instancia de autenticación y el proveedor de Google desde tu archivo firebase.js
import { GoogleAuthProvider, signInWithPopup } from '../../firebase/firebase.js';

export default function Register() {
  const navigate = useNavigate();
  const register = useStore((state) => state.register);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value });
    setErrors(validation({
      ...user,
      [name]: value,
    }));
  }

  const validation = (user) => {
    const errors = {};
    // Validación de campos
    return errors;
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      // Registra el usuario con correo y contraseña
      await register(user.name, user.email, user.password);
      toast.success('Cuenta creada correctamente', {
        onClose: () => {
          navigate('/login');
        },
        autoClose: 2000,
      });
      setUser({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
      toast.error('Error al crear cuenta')
    }
  }

  const googleSignInHandler = async () => {
    try {
      // Inicia sesión con Google
      await auth.signInWithPopup(GoogleAuthProvider);
      navigate('/'); // Redirige a la página principal después del inicio de sesión exitoso
    } catch (error) {
      console.log(error);
      toast.error('Error al iniciar sesión con Google');
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crea tu cuenta</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <input className={styles.input} name='name' type="text" value={user.name} placeholder='Nombre' onChange={changeHandler} />
        <input className={styles.input} name='email' type="email" value={user.email} placeholder='Email' onChange={changeHandler} />
        <input className={styles.input} name='password' value={user.password} type="password" placeholder='Contraseña' onChange={changeHandler} />
        <button
          className={styles.button}
          type='submit'
          disabled={!user.name || !user.email || !user.password || errors.name || errors.email || errors.password} >
          Crear cuenta
        </button>
        <Link to='/login'>
          <span className={styles.span}>¿Ya tienes cuenta? Inicia sesión</span>
        </Link>
        <button className={styles.button} onClick={googleSignInHandler}>
          Registrarse con Google
        </button>
        <ToastContainer />
      </form>
    </div>
  )
}
