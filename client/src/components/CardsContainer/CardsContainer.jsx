import Card from "../Card/Card"
import './CardsContainer.css'

export default function CardsContainer({ products }) {
  return (
    <div className='cards-container'>
      {products.map(product => (
      <Card key={product.id} product={product} />))}
    </div>
  )
}