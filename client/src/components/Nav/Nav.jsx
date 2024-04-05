import './Nav.css';
import { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/images/nombre.png'
import { useStore } from '../../store.js';

export default function Nav() {
  const listaMarcas = useStore((state) => state.listaMarcas);
  const listaGeneros = useStore((state) => state.listaGeneros);
  const listaCategorias = useStore((state) => state.listaCategorias);
  const listaSubcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);
  const searchFunction = useStore((state) => state.setSearch);
  const getFilteredProducts = useStore((state) => state.getFilteredProducts);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);
  const [search, setSearch] = useState('');
  const [isMenuDown, setIsMenuDown] = useState(false);
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);


  const listas = [
    {
      lista: listaGeneros,
      title: 'Géneros',
      name: 'genero',
    },
    {
      lista: listaMarcas,
      title: 'Marcas',
      name: 'marca',
    },
    {
      lista: listaCategorias,
      title: 'Categorias',
      name: 'categoria',
    },
    {
      lista: listaSubcategorias,
      title: 'Subcategorias',
      name: 'subcategoria',
    },
    {
      lista: listaColores,
      title: 'Colores',
      name: 'color',
    },
    {
      lista: listaTallas,
      title: 'Tallas',
      name: 'talla',
    },
  ];
  let windowTimeout;

  useEffect(() => {
    let totalQuantity = 0;
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.forEach(product => {
      totalQuantity += product.quantity;
    });
  setTotalItemsInCart(totalQuantity);
}, [cart]);

  const handleScroll = () => {
    setTimeout(() => {
      const targetElement = document.getElementById('categories');
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }, 500);
  };
  const triggerAnimation = () => {
    if (!isMenuDown) {
      const targetElement = document.querySelector('.categories-window');
      windowTimeout = setTimeout(() => {
        targetElement.classList.add('move-down');
        setIsMenuDown(true);
      }, 500);
    }
  }
  const cancelAnimation = () => {
    if (!isMenuDown) {
      clearTimeout(windowTimeout);
      windowTimeout = null;
      setIsMenuDown(false);
    }
  }
  const resetAnimation = () => {
    if (isMenuDown) {
      const targetElement = document.querySelector('.categories-window');
      windowTimeout = setTimeout(() => {
        targetElement.classList.remove('move-down');
        targetElement.classList.add('move-up');
        setTimeout(() => {
          targetElement.classList.remove('move-up');
          setIsMenuDown(false);
        }, 500);
      }, 1000);
    }
  }
  const cancelMoveWindowUp = () => {
    clearTimeout(windowTimeout);
    windowTimeout = null;
  }
  const handleSearch = async () => {
    try {
      searchFunction(search);
      await getFilteredProducts();
      navigate('/tienda')
    } catch (error) {
      console.error(error);
    }
  }
  const goToStore = async () => {
    try {
      resetFilters();
      await getFilteredProducts();
      navigate('/tienda');
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  }
  const handleCategorySearch = async (event) => {
    try {
      const { id } = event.target;
      const name = event.target.getAttribute('name');
      setFilters(name, id);
      await getFilteredProducts();
      setIsMenuDown(false);
      navigate('/tienda');
      window.scrollTo(0, 0);
      const targetElement = document.querySelector('.categories-window');
      targetElement.classList.remove('move-down');
      targetElement.classList.remove('move-up');
      targetElement.classList.add('dissapear');
      setTimeout(() => {
        clearTimeout(windowTimeout);
        targetElement.classList.remove('dissapear');
        setIsMenuDown(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className='nav-bar' >
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          exact="true"
          activeClass="active" >
          <NavLink to='/'>
            <div className='logo-container' >
              <img src={logo} alt='logo' className='logo' />
            </div>
          </NavLink>
        </ScrollLink>
        <NavLink to='/' >
          <button className='nav-bar-button' onClick={handleScroll} onMouseEnter={triggerAnimation} onMouseLeave={cancelAnimation}
          >Categorias</button>
        </NavLink>
        <button className='nav-bar-button' onClick={goToStore} >Tienda</button>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)} />
          <button className='nav-bar-search-button' onClick={handleSearch} >🔍</button>
        </div>
        <div>
          <NavLink to='/login'>
            <button className='nav-bar-button' >Ingresar / Perfil</button>
          </NavLink>
          <NavLink to='/carrito'>
            <button className='nav-bar-button' >
              Carrito {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
            </button>
          </NavLink>
          <NavLink to='/checkout'>
            <button className='nav-bar-button' >CheckOut</button>
          </NavLink>
        </div>
      </nav>
      <div className='categories-window' key='categories-window' onMouseEnter={cancelMoveWindowUp} onMouseLeave={resetAnimation} >
        {listas.map((list, index) => (
          <>
            <label key={`${list.title} ${index}`} >{list.title}</label>
            {list.lista.map((value, index) => (
              <p
                key={`${value} ${index}`}
                onMouseEnter={cancelMoveWindowUp}
                id={value}
                name={list.name}
                onClick={handleCategorySearch}
              >
                {value}
              </p>
            ))}
          </>
        ))}
      </div>
    </>
  );
}