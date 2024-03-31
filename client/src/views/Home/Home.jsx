import styles from './Home.module.css'
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import { useStore } from '../../store.js';

const Home = ({ products, categories }) => {
  const nuevos = useStore((state) => state.nuevos);
  const destacados = useStore((state) => state.destacados);
  const ofertas = useStore((state) => state.ofertas);
  const tendencia = useStore((state) => state.tendencia);


  return (
    <div className={styles['home-container']} id='home' >
      <HeroImagesBar products={products} />
      <ProductsBar title='Nuevos' products={nuevos} />
      <ProductsBar title='Destacados' products={destacados} />
      <ProductsBar title='Ofertas' products={ofertas} />
      <ProductsBar title='Tendencia' products={tendencia} />
      <ProductsBar title='Favoritos' products={products} />
      <CategoriesBar title='Categorias' categories={categories} />
      <br/><br/><br/>
    </div>
  )
}

export default Home
