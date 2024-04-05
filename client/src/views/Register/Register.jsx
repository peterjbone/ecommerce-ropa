import styles from './Register.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Register = () => {

  const navigate = useNavigate()
  
  const [direccion, setDireccion] = useState({
    calle: '',
    altura: '',
    provincia: '',
    ciudad: '',
    cp: '',
  })

  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    address: direccion
  })

  const changeHandler = (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const direccionHandler = (e) => {
    const {name, value} = e.target
    setDireccion({...direccion, [name]: value})
    setUser({...user, address: {...direccion, [name]: value}})
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if(validation(user, direccion)) {

      try {
        // throw Error
      toast.success('Cuenta creada correctamente', {
        onClose: () => {
          navigate('/');
        },
        autoClose: 2000,
      })
      } catch (error) {
        console.log(error);
      }
    }
    else {
      toast.error('Error al crear cuenta')
    }
    console.log(user);
  }

  const validation = (user, direccion) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/

    if(!emailRegex.test(user.email)) return false

    return true
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crea tu cuenta</h1>

      <form className={styles.form} onSubmit={submitHandler}>
        <input className={styles.input} name='name' type="text" value={user.name} placeholder='Nombre'onChange={changeHandler} />
        <input className={styles.input} name='surname' type="text" value={user.surname} placeholder='Apellido'onChange={changeHandler} />
        <input className={styles.input} name='email' type="email" value={user.email} placeholder='Email'onChange={changeHandler} />
        <input className={styles.input} name='password' value={user.password} type="password" placeholder='Contraseña'onChange={changeHandler} />
        <label>Dirección:</label><br></br>
        <input className={styles.inputAddress} type="text" name='calle' value={direccion.calle} onChange={direccionHandler} placeholder='Calle' />
        <input className={styles.inputAddress} type="text" name='altura' value={direccion.altura} onChange={direccionHandler} placeholder='Altura' />
        <input className={styles.inputAddress} type="text" name='provincia' value={direccion.provincia} onChange={direccionHandler} placeholder='Provincia' />
        <input className={styles.inputAddress} type="text" name='ciudad' value={direccion.ciudad} onChange={direccionHandler} placeholder='Ciudad' />
        <input className={styles.inputAddress} type="text" name='cp' value={direccion.cp} onChange={direccionHandler} placeholder='Código postal' />
        <button className={styles.button} type='submit'>Crear cuenta</button>
        <Link to='/login'><span className={styles.span}>¿Ya tienes cuenta? Inicia sesión</span></Link>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Register
