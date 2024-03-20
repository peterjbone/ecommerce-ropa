import CardsContainer from "../../components/CardsContainer/CardsContainer"
import products from '../../utils/arrayProductos';

const Home = () => {
  return (
    <div>
      <CardsContainer products={products} />
    </div>
  )
}

export default Home
