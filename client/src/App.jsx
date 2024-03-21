import { Route, Routes } from 'react-router-dom';
import { Home } from './views';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import products from './utils/arrayProductos.js';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = products.reduce((unique, product) => {
      if (!unique.some(item => item.subcategoria === product.subcategoria)) {
        unique.push(product);
      }
      return unique;
    }, []);
    setCategories(uniqueCategories);
  }, [products]);

  return (
    <>
      <Nav categories={categories}/>
      <Routes>
        <Route path='/' element={<Home  products={products} categories={categories} />} />
        <Route path='/compras' element={''} ></Route>
      </Routes>
    </>
  );
}

export default App;
