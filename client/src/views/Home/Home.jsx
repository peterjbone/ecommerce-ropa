import styles from './Home.module.css'
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';

const Home = ({ products, categories }) => {

  return (
    <div className={styles['home-container']} id='home' >
      <HeroImagesBar products={products} />
      <ProductsBar title='Destacados' products={products} />
      <ProductsBar title='New' products={products} />
      <ProductsBar title='Favoritos' products={products} />
      <ProductsBar title='Ofertas' products={products} />
      <CategoriesBar title='Categorias' products={categories} />
      <br /><br /><br />
    </div>
  )
}

export default Home
