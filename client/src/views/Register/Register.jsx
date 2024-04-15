import styles from './Register.module.css'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from '../../store';

export default function Register() {
  const navigate = useNavigate();
  const register = useStore((state) => state.register);
  // const [direccion, setDireccion] = useState({ //No lo estaríamos usando, de si hay que modificar el modelo Usuario
  //   calle: '',
  //   altura: '',
  //   provincia: '',
  //   ciudad: '',
  //   cp: '',
  // })
  const [user, setUser] = useState({ // Lo mismo de arriba
    // fullname: '',
    name: '',
    // surname: '',
    email: '',
    password: '',
    // repeatPassword: '',
    // address: direccion
  });
  const [errors, setErrors] = useState({ // Creo q esto es sumamente necesario para mostrar q lo q se escribe está bien
    name: '',
    email: '',
    password: '',
    // repeatPassword: '', // Faltaría agregar esto para mi para mi
  });

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value });
    // setErrors(validation({
    //   ...user,
    //   [name]: value,
    // }));
  }
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
    if (user.repeatPassword && (user.password !== '' && user.repeatPassword !== '' && user.password !== user.repeatPassword)) {
      errors.repeatPassword = 'Las contraseñas deben ser iguales';
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
  // const direccionHandler = (e) => {
  //   const {name, value} = e.target
  //   setDireccion({...direccion, [name]: value})
  //   setUser({...user, address: {...direccion, [name]: value}})
  // }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await register(user.name, user.email, user.password);
      toast.success('Cuenta creada correctamente', {
        onClose: () => {
          navigate('/login');
        },
        autoClose: 2000,
      });
      setUser({
        // fullname: '',
        name: '',
        // surname: '',
        email: '',
        password: '',
        // address: ''
      });
      // setDireccion({});
    } catch (error) {
      console.log(error);
      toast.error('Error al crear cuenta')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crea tu cuenta</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        {/* <input className={styles.input} name='fullname' type="text" value={user.fullname} placeholder='Nombre completo'onChange={changeHandler} /> */}
        <input className={styles.input} name='name' type="text" value={user.name} placeholder='Nombre' onChange={changeHandler} onBlur={handleInputBlur} /> 

        {/* Así me gusta agregar los errores a mi porq así ya ocupan el espacio html y se hace visible cuando existe Requiere invisible { visibility: hidden; } o style={{ visibility: `${errors.name ? 'hidden' : ''}` }}*/}

        <p
          className={errors.name ? '' : 'invisible'} >
          {errors.name ? `${errors.name}` : 'invisible'}
        </p>

        {/* <input className={styles.input} name='surname' type="text" value={user.surname} placeholder='Apellido'onChange={changeHandler} /> */}
        
        <input className={styles.input} name='email' type="email" value={user.email} placeholder='Email' onChange={changeHandler} onBlur={handleInputBlur} />

        <p className={errors.email ? '' : 'invisible'} >{errors.email ? `${errors.email}` : 'invisible'}</p>

        <input className={styles.input} name='password' value={user.password} type="password" placeholder='Contraseña' onChange={changeHandler} onBlur={handleInputBlur} />

        <p className={errors.password ? '' : 'invisible'} >{errors.password ? `${errors.password}` : 'invisible'}</p>

        {/* <input className={styles.input} name='password' value={user.repeatPassword} type="password" placeholder='Repetir Contraseña' onChange={changeHandler} /> */}

        {/* <p className={errors.repeatPassword ? '' : 'invisible'} >{errors.repeatPassword ? `${errors.repeatPassword}` : 'invisible'}</p> */}

        {/* <label>Dirección:</label><br></br>
        <input className={styles.inputAddress} type="text" name='calle' value={direccion.calle} onChange={direccionHandler} placeholder='Calle' />
        <input className={styles.inputAddress} type="text" name='altura' value={direccion.altura} onChange={direccionHandler} placeholder='Altura' />
        <input className={styles.inputAddress} type="text" name='provincia' value={direccion.provincia} onChange={direccionHandler} placeholder='Provincia' />
        <input className={styles.inputAddress} type="text" name='ciudad' value={direccion.ciudad} onChange={direccionHandler} placeholder='Ciudad' />
        <input className={styles.inputAddress} type="text" name='cp' value={direccion.cp} onChange={direccionHandler} placeholder='Código postal' /> */}
        <button
          className={styles.button}
          type='submit'
          disabled={!user.name || !user.email || !user.password || errors.name || errors.email || errors.password} >
          Crear cuenta
        </button>
        <Link to='/login'>
          <span className={styles.span}>¿Ya tienes cuenta? Inicia sesión</span>
        </Link>
        <ToastContainer />
      </form>
    </div>
  )
}