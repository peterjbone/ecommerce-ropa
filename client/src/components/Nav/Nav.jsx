import './Nav.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../public/vite.svg'

export default function Nav(props) {
  const [search, setSearch] = useState('');

  return (
    <nav className='nav-bar' >
      <NavLink to='/'>
        <button>
          <img src={logo} alt='logo' />
        </button>
      </NavLink>
      <button>Categories</button>
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)} />
      <button>Login / Profile</button>
      <NavLink to='/cart'>
        <button>Cart</button>
      </NavLink>
      <NavLink to='/checkout'>
        <button>CheckOut</button>
      </NavLink>
    </nav >
  );
}