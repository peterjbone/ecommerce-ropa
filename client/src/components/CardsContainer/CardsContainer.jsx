import {Link} from "react-router-dom"
import Card from "../Card/Card"
import styles from './CardsContainer.module.css'

const CardsContainer = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map(product => (
      <Link to={`/${product.id}`} key={product.id} className={styles.link}>
      <Card 
      key={product.id} 
      image={product.imagen[0]}
       name={product.nombre}
        price={product.precio} 
        />
        </Link>
        ))}
    </div>
  )
}

export default CardsContainer
