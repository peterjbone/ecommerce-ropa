import { Route, Routes } from 'react-router-dom';
import { Home, Form } from './views';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import { useStore } from './store.js';
import products from './utils/arrayProductos.js';

function App() {
  const [categories, setCategories] = useState([]);
  // const products = useStore((state) => state.products);
  const getDestacados = useStore((state) => state.getDestacados);
  const getNuevos = useStore((state) => state.getNuevos);
  const getOfertas = useStore((state) => state.getOfertas);
	
  useEffect(() => {
    const uniqueCategories = products.reduce((unique, product) => {
      if (!unique.some(item => item.subcategoria === product.subcategoria)) {
        unique.push(product);
      }
      return unique;
    }, []);
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    (async function loadData() {
      try {
        await getDestacados();
        await getNuevos();
        await getOfertas();
      } catch (error) {
        console.error();
      }
    }())
  });

  return (
    <>
      <Nav categories={categories} />
      <Routes>
        <Route path='/' element={<Home products={products} categories={categories} />} />
        <Route path='/compras' element={''} ></Route>
			<Route path='/form' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
