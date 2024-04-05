import styles from './Login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <strong>Ingresa tu usuario y contraseña</strong>

      <form className={styles.form} onSubmit={submitHandler}>
        <input className={styles.input} name='email' type="email" value={user.email} placeholder='Email'onChange={changeHandler} />
        <input className={styles.input} name='password' value={user.password} type="password" placeholder='Contraseña'onChange={changeHandler} />
        <span className={styles.span}>¿Olvidaste tu contraseña?</span>
        <button className={styles.button} type='submit'>Login</button>
        <Link to='/register'><span className={styles.span}>¿No tienes cuenta? Registrate</span></Link>
      </form>
    </div>
  )
}

export default Login
