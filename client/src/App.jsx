import Nav from './components/Nav/Nav';
import Detail from "./views/Detail/Detail.jsx"
import Tienda from "./views/Tienda/Tienda.jsx"
import Footer from './components/Footer/Footer.jsx';
import Carrito from "./components/Carrito/Carrito"


import { Route, Routes } from 'react-router-dom';
import { Home, Form, FormEdit, Login, Register } from './views';
import { useEffect } from 'react';
import { useStore } from './store.js';
import NotFound from './views/NotFound/NotFound.jsx';
import UserDashboard from './views/UserDashboard/UserDashboard.jsx';

import { getCookie } from './utils/getCookie.js';
import { jwtDecode } from 'jwt-decode'

export default function App() {
  const getAllProducts = useStore((state) => state.getAllProducts);
  const getProductInfo = useStore((state) => state.getProductInfo);
  const getDestacados = useStore((state) => state.getDestacados);
  const getNuevos = useStore((state) => state.getNuevos);
  const getOfertas = useStore((state) => state.getOfertas);
  const getTendencia = useStore((state) => state.getTendencia);


  const user = useStore((state) => state.user);
  const getUserById = useStore((state) => state.getUserById);
  
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

  useEffect(() => {
    (async function loadUserData() {
      try {
        if(!user) {
          const token = getCookie('token'); // Retrieve the token from the cookie
          if(token) {
            const userId = jwtDecode(token).id
            await getUserById(userId)
          }
        }
      } catch (error) {
        console.error('Auto-login failed:', error)
      }
    }())
  });
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={<Form />} />
        <Route path='/editproduct/:id' element={<FormEdit />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/:id' element={<Detail/>} />
        <Route path='/usuario' element={<UserDashboard />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}