import styles from './Home.module.css'
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import products from '../../utils/arrayProductos';

const Home = () => {
  return (
    <div className={styles['home-container']} >
      <HeroImagesBar products={products} />
      <ProductsBar title='Destacados' products={products} />
      <ProductsBar title='Nuevos' products={products} />
      <ProductsBar title='Favoritos' products={products} />
      <ProductsBar title='Ofertas' products={products} />
      <CardsContainer products={products} />
    </div>
  )
}

export default Home
