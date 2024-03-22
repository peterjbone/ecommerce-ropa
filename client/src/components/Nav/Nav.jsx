import './Nav.css';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/images/nombre.png'
import { useStore } from '../../store.js';

export default function Nav({ categories }) {
  const [search, setSearch] = useState('');
  const searchFunction = useStore((state) => state.search);
  const getAll = useStore((state) => state.getAll);
  const getSubcategoria = useStore((state) => state.getSubcategoria);
  const navigate = useNavigate();
  let windowTimeout;

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
    const targetElement = document.querySelector('.categories-window');
    targetElement.classList.add('move-down');
    windowTimeout = setTimeout(() => {
      targetElement.classList.remove('move-down');
      targetElement.classList.add('move-up');
      setTimeout(() => {
        targetElement.classList.remove('move-up');
      }, 500);
    }, 3000);
  }

  const cancelMoveWindowUp = () => {
    clearTimeout(windowTimeout);
  }

  const resetAnimation = () => {
    const targetElement = document.querySelector('.categories-window');
    targetElement.classList.remove('move-down');
    setTimeout(() => {
      targetElement.classList.remove('move-up');
      targetElement.classList.add('move-up');
      setTimeout(() => {
        targetElement.classList.remove('move-up');
      }, 500);
    }, 1500);
  }

  const handleSearch = async () => {
    try {
      await searchFunction(search);
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }

  const goToStore = async () => {
    try {
      await getAll();
      navigate('/tienda');
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubcategorySearch = async (event) => {
    try {
      await getSubcategoria(event.target.id);
      navigate('/tienda');
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
          <button className='nav-bar-button' onClick={handleScroll} onMouseEnter={triggerAnimation}
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
          <button className='nav-bar-button' >Ingresar / Perfil</button>
          <NavLink to='/cart'>
            <button className='nav-bar-button' >Carrito</button>
          </NavLink>
          <NavLink to='/checkout'>
            <button className='nav-bar-button' >CheckOut</button>
          </NavLink>
        </div>
      </nav>
      <div className='categories-window' onMouseEnter={cancelMoveWindowUp} onMouseLeave={resetAnimation} >
        {categories.map(category =>
          <p
            key={category.id}
            onMouseEnter={cancelMoveWindowUp}
            id={category.subcategoria}
            onClick={handleSubcategorySearch}
          >
            {category.subcategoria}
          </p>
        )}
      </div>
    </>
  );
}