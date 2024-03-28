import styles from './Home.module.css'
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import { useStore } from '../../store.js';

const Home = () => {
  const products = useStore((state) => state.products);
  const nuevos = useStore((state) => state.nuevos);
  const destacados = useStore((state) => state.destacados);
  const ofertas = useStore((state) => state.ofertas);
  const tendencia = useStore((state) => state.tendencia);
  const listaMarcas = useStore((state) => state.listaMarcas);
  const listaGeneros = useStore((state) => state.listaGeneros);
  const listaCategorias = useStore((state) => state.listaCategorias);
  const listaSubcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);

  return (
    <div className={styles['home-container']} id='home' >
      {/* <HeroImagesBar products={products} />
      <ProductsBar title='Nuevos' products={nuevos} />
      <ProductsBar title='Destacados' products={destacados} />
      <ProductsBar title='Ofertas' products={ofertas} />
      <ProductsBar title='Tendencia' products={tendencia} />
      <ProductsBar title='Favoritos' products={products} />
      <CategoriesBar title='Marcas' categories={listaMarcas} />
      <CategoriesBar title='Géneros' categories={listaGeneros} />
      <CategoriesBar title='Categorias' categories={listaCategorias} />
      <CategoriesBar title='Subcategorias' categories={listaSubcategorias} />
      <CategoriesBar title='Colores' categories={listaColores} />
      <CategoriesBar title='Tallas' categories={listaTallas} /> */}
      <br /><br /><br />
    </div>
  )
}

export default Home
