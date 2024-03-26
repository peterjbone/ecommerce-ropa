import { Route, Routes } from 'react-router-dom';
import { Home, Form } from './views';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import { useStore } from './store.js';
import Detail from "./views/Detail/Detail.jsx"
import Tienda from "./views/Tienda/Tienda.jsx"
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [categories, setCategories] = useState([]);
  const products = useStore((state) => state.products);
  const getDestacados = useStore((state) => state.getDestacados);
  const getNuevos = useStore((state) => state.getNuevos);
  const getOfertas = useStore((state) => state.getOfertas);
	const getTendencia = useStore((state) => state.getTendencia);

  useEffect(() => {
    const uniqueCategories = products.reduce((unique, product) => {
      if (!unique.some(item => item.subcategoria === product.subcategoria)) {
        unique.push(product);
      }
      return unique;
    }, []);
    setCategories(uniqueCategories);
  }, [products]);

  (async function loadData() {
    try {
      await getDestacados();
      await getNuevos();
      await getOfertas();
      await getTendencia();
    } catch (error) {
      console.error();
    }
  }())
  
  return (
    <>
      <Nav categories={categories} />
      <Routes>
        <Route path='/' element={<Home products={products} categories={categories} />} />
				<Route path='/form' element={<Form />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/:id' element={<Detail products={products} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
