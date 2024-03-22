import './Nav.css';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../../public/vite.svg'
import { useStore } from '../../store.js';

export default function Nav({ categories }) {
  const [search, setSearch] = useState('');
  const searchFunction = useStore((state) => state.search);
  const navigate = useNavigate();

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
  }

  const resetAnimation = () => {
    const targetElement = document.querySelector('.categories-window');
    targetElement.classList.remove('move-down');
    targetElement.classList.add('move-up');
    setTimeout(() => {
      targetElement.classList.remove('move-up');
    }, 500);
  }

  const handleSearch = async () => {
    try {
      await searchFunction(search);
      navigate('/')
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
            <button className='logo' >
              <img src={logo} alt='logo' />
            </button>
          </NavLink>
        </ScrollLink>
        <NavLink to='/' >
          <button className='nav-bar-button' onClick={handleScroll} onMouseEnter={triggerAnimation}
          >Categories</button>
        </NavLink>
        <NavLink to='/tienda'>
            <button className='nav-bar-button' >Tienda</button>
          </NavLink>
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

      <div className='categories-window' onMouseLeave={resetAnimation} >
        {categories.map(category =>
          <NavLink key={category.subcategoria} to={`/compras?subcategoria:${category.subcategoria}`} >
            <p>{category.subcategoria}</p>
          </NavLink>
        )}
      </div>
    </>
  );
}