import Nav from './components/Nav/Nav';
import Detail from "./views/Detail/Detail.jsx"
import Tienda from "./views/Tienda/Tienda.jsx"
import Footer from './components/Footer/Footer.jsx';
import Carrito from "./components/Carrito/Carrito"


import { Route, Routes } from 'react-router-dom';
import { Home, Form, FormEdit } from './views';
import { useEffect } from 'react';
import { useStore } from './store.js';

export default function App() {
  const getAllProducts = useStore((state) => state.getAllProducts);
  const getProductInfo = useStore((state) => state.getProductInfo);
  const getDestacados = useStore((state) => state.getDestacados);
  const getNuevos = useStore((state) => state.getNuevos);
  const getOfertas = useStore((state) => state.getOfertas);
  const getTendencia = useStore((state) => state.getTendencia);

  useEffect(() => {
    (async function loadData() {
      try {
        await getAllProducts();
        await getProductInfo();
        await getDestacados();
        await getNuevos();
        await getOfertas();
        await getTendencia();
      } catch (error) {
        console.error();
      }
    }())
  });

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/editproduct/:id' element={<FormEdit />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/:id' element={<Detail/>} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  );
}