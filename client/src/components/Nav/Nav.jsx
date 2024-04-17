import "./Nav.css";

import logo from "../../assets/images/nombre.png";
import sun from "../../assets/icons/sun-icon.svg";
import moon from "../../assets/icons/moon-icon.svg";

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "../../store.js";

import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import Avatar from "./Avatar.jsx";
import MenuItem from "./MenuItem.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Nav() {
  const getAllUsers = useStore((state) => state.getAllUsers);
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
  const cart = useStore((state) => state.cart);
  const userInfo = useStore((state) => state.userInfo);
  const logOut = useStore((state) => state.logOut);
  const [search, setSearch] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isMenuDown, setIsMenuDown] = useState(false);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const listas = [
    {
      lista: listaGeneros,
      title: "Géneros",
      name: "genero"
    },
    {
      lista: listaMarcas,
      title: "Marcas",
      name: "marca"
    },
    {
      lista: listaCategorias,
      title: "Categorias",
      name: "categoria"
    },
    {
      lista: listaSubcategorias,
      title: "Subcategorias",
      name: "subcategoria"
    },
    {
      lista: listaColores,
      title: "Colores",
      name: "color"
    },
    {
      lista: listaTallas,
      title: "Tallas",
      name: "talla"
    }
  ];
  let windowTimeout;

  useEffect(() => {
    let totalQuantity = 0;

    if (cart) {
      cart.forEach((product) => {
        totalQuantity += product.quantity;
      });
    }

    setTotalItemsInCart(totalQuantity);
  }, [cart]);

  const handleScroll = () => {
    setTimeout(() => {
      const targetElement = document.getElementById("categories");
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth"
        });
      }
    }, 500);
  };
  const triggerAnimation = () => {
    if (!isMenuDown) {
      const targetElement = document.querySelector(".categories-window");
      windowTimeout = setTimeout(() => {
        targetElement.classList.add("move-down");
        setIsMenuDown(true);
      }, 500);
    }
  };
  const cancelAnimation = () => {
    if (!isMenuDown) {
      clearTimeout(windowTimeout);
      windowTimeout = null;
      setIsMenuDown(false);
    }
  };
  const resetAnimation = () => {
    if (isMenuDown) {
      const targetElement = document.querySelector(".categories-window");
      windowTimeout = setTimeout(() => {
        targetElement.classList.remove("move-down");
        targetElement.classList.add("move-up");
        setTimeout(() => {
          targetElement.classList.remove("move-up");
          setIsMenuDown(false);
        }, 500);
      }, 1000);
    }
  };
  const cancelMoveWindowUp = () => {
    clearTimeout(windowTimeout);
    windowTimeout = null;
  };
  const handleSearch = async () => {
    try {
      searchFunction(search);
      await getFilteredProducts();
      navigate("/tienda");
    } catch (error) {
      console.error(error);
    }
  };
  const goToStore = async () => {
    try {
      resetFilters();
      await getFilteredProducts();
      navigate("/tienda");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCategorySearch = async (event) => {
    try {
      const { id } = event.target;
      const name = event.target.getAttribute("name");
      if (location.path !== "/tienda") {
        resetFilters();
      }
      setFilters(name, id);
      await getFilteredProducts();
      setIsMenuDown(false);
      navigate("/tienda");
      window.scrollTo(0, 0);
      const targetElement = document.querySelector(".categories-window");
      targetElement.classList.remove("move-down");
      targetElement.classList.remove("move-up");
      targetElement.classList.add("dissapear");
      setTimeout(() => {
        clearTimeout(windowTimeout);
        targetElement.classList.remove("dissapear");
        setIsMenuDown(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setIsDarkTheme(!isDarkTheme);
  };

  //? Para abrir el menú de usuario
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen((value) => !value);
  }

  //? Para ir la login
  function goToLogin() {
    toggleOpen();
    navigate("/login");
  }

  //? Para ir a Register
  function goToRegister() {
    toggleOpen();
    navigate("/register");
  }

  //? Para ir a Usuario
  function goToProfile() {
    toggleOpen();
    navigate("/usuario");
  }

  //? Para salir de sesion
  const handlelogOut = async () => {
    try {
      await logOut();
      localStorage.removeItem("userInfo");
      toast.success("Saliste de tu sesión", {
        onClose: () => {
          navigate("/");
        },
        autoClose: 1000
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(getAllUsers())
  return (
    <>
      <nav className="nav-bar">
        <ToastContainer />
        <NavLink to="/">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </NavLink>
        <NavLink to="/">
          <button
            className="nav-bar-button"
            onClick={handleScroll}
            onMouseEnter={triggerAnimation}
            onMouseLeave={cancelAnimation}>
            Categorias
          </button>
        </NavLink>
        <button
          className="nav-bar-button"
          onClick={goToStore}>
          Tienda
        </button>
        <div className="search-bar-container" >
          <button
            className="nav-bar-search-button"
            onClick={handleSearch}>
            <FaSearch size={25} />
          </button>
          <input
            type="search"
            name="search"
            placeholder="Buscar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {/*** SECCION DE USUARIO: FAVORITO, CARRITO Y PERFIL ***/}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>
          {/* Perfil */}
          <div
            className="cursor-pointer"
            onClick={toggleOpen}>
            <Avatar src={userInfo?.image} />
          </div>
          {userInfo?.name && (
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.75rem",
                marginLeft: "-10px"
              }}>
              {userInfo?.name}
            </p>
          )}
          {isOpen && (
            <div
              style={{
                position: "absolute",
                zIndex: "10",
                top: "2.5rem",
                left: "4.5rem",
                border: "3px solid #000"
              }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                {userInfo?._id ? (
                  <>
                    <MenuItem onClick={goToProfile} label="Mi perfil" />
                    <MenuItem onClick={() => { }} label="Historial de compras" />
                    <MenuItem
                      onClick={handlelogOut}
                      label="Salir de la sesión"
                    />
                  </>
                ) : (
                  <>
                    <MenuItem onClick={goToLogin} label="Inicio sesión" />
                    <MenuItem onClick={goToRegister} label="Registro" />
                  </>
                )}
              </div>
            </div>
          )}
          {/* Favoritos */}
          <NavLink to="/favoritos">
            <button className="nav-bar-button">
              <FaHeart size={25} className="icon-favorito" />
            </button>
          </NavLink>
          {/* Carrito */}
          <NavLink to="/carrito">
            <button className="nav-bar-button">
              <FaCartShopping size={25} />
              <span className="cart-number">{totalItemsInCart}</span>
            </button>
          </NavLink>
        </div>
        {/* DARK MODE */}
        <button
          className="nav-bar-button theme-button"
          onClick={toggleTheme}>
          <img src={isDarkTheme ? moon : sun} alt="sun" />
        </button>
      </nav>
      <div
        className="categories-window"
        key="categories-window"
        onMouseEnter={cancelMoveWindowUp}
        onMouseLeave={resetAnimation}>
        {listas.map((list, index) => (
          <React.Fragment key={`${list.title}-${index}`}>
            <>
              <label key={`${list.title} ${index}`}>{list.title}</label>
              {list.lista.map((value, index) => (
                <p
                  key={`${value} ${index}`}
                  onMouseEnter={cancelMoveWindowUp}
                  id={value}
                  name={list.name}
                  onClick={handleCategorySearch} >
                  {value}
                </p>
              ))}
            </>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
