import styles from './Home.module.css'
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import { useStore } from '../../store.js';

const Home = ({ products, categories }) => {
  const destacados = useStore((state) => state.destacados);
  const nuevos = useStore((state) => state.nuevos);
  const ofertas = useStore((state) => state.ofertas);


  return (
    <div className={styles['home-container']} id='home' >
      <HeroImagesBar products={products} />
      <ProductsBar title='Destacados' products={destacados} />
      <ProductsBar title='Nuevos' products={nuevos} />
      <ProductsBar title='Favoritos' products={products} />
      <ProductsBar title='Ofertas' products={ofertas} />
      <CategoriesBar title='Categorias' categories={categories} />
      <br /><br /><br />
    </div>
  )
}

export default Home
