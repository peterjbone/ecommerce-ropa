import Card from "../Card/Card"
import styles from './CardsContainer.module.css'

const CardsContainer = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map(product => <Card key={product.id} image={product.imagen[0]} name={product.nombre} price={product.precio} />)}
    </div>
  )
}

export default CardsContainer
