import { create } from "zustand";
import axios from "axios";
import Cookies from "universal-cookie";

const { BACK_URL } = process.env;
const cookies = new Cookies();

export const useStore = create((set) => ({
  userInfo: null, // Creo q ya no se usa pero lo dejo por si servia para algo
  //   typeof localStorage !== `undefined` && localStorage.getItem(`userInfo`)
  //     ? JSON.parse(localStorage.getItem(`userInfo`))
  //     : null,
  // userLastPurchase:
  //   typeof localStorage !== `undefined` &&
  //   localStorage.getItem(`userLastPurchase`)
  //     ? JSON.parse(localStorage.getItem(`userLastPurchase`))
  //     : null,
  products: [],
  productosFiltrados: [],
  cart: [],
  nuevos: [],
  destacados: [],
  ofertas: [],
  tendencia: [],
  listaMarcas: [],
  listaGeneros: [],
  listaCategorias: [],
  listaSubcategorias: [],
  listaColores: [],
  listaTallas: [],
  productoDetail: "",
  productoReviews: "",
  resenas: [],
  filtrosResenas: {
    buscarPor: "usuario",
    busqueda: "",
    valoracionSolo: true,
    valoracionDesde: "--",
    valoracionHasta: "--",
    fechaSolo: true,
    fechaDesde: "",
    fechaHasta: "",
    fechaAceptadaSolo: true,
    fechaAceptadaDesde: "",
    fechaAceptadaHasta: "",
    aceptada: "notAccepted",
    ordernado: "fecha",
    ascendente: false,
    pagina: 1,
    cantidadDeResenas: 0
  },
  filtros: {
    busqueda: "",
    marca: [],
    genero: [],
    categoria: [],
    subcategoria: [],
    precioDesde: "",
    precioHasta: "",
    porcentajeDeOferta: 0,
    esNuevo: null,
    color: [],
    talla: [],
    ordenado: "precio",
    ascendente: false,
    pagina: 1,
    productosPorPagina: 100,
  },
  filtrosSeleccionados: [],
  marcasDisponibles: [],
  categoriasDisponibles: [],
  generosDisponibles: [],
  subcategoriasDisponibles: [],
  coloresDisponibles: [],
  tallasDisponibles: [],
  cantidadDeProductos: 100, // Momentáneamente para traer todo products y usarlo para fotos, nuevos, ofertas, etc

  restoreSession: async () => {
    try {
      await axios(`https://ecommerce-ropa-production.up.railway.app/auth/restore`);
    } catch (error) {
      console.error("Error al restaurar la sesión", error);
      throw error;
    }
  },
  getUserLastPurchase: async (userId) => { // No se si es necesario ya q el carrito ya persiste a menos q sea de otra cosa
    try {
      const { data } = await axios.get(
        `https://ecommerce-ropa-production.up.railway.app/lastpurchase?id=${userId}`
      );

      if (data) {
        localStorage.setItem(`userLastPurchase`, JSON.stringify({ ...data }));
      }

      set((state) => ({
        ...state,
        userLastPurchase: { ...data }
      }));
    } catch (error) {
      console.error(`Error al buscar compras de usuario (front)`, error);
    }
  },
  register: async (name, email, password) => {
    try {
      await axios.post(`https://ecommerce-ropa-production.up.railway.app/auth/register`, { name, email, password });
    } catch (error) {
      console.error("Error al registrar usuario", error);
      throw error;
    }
  },
  login: async (email, password, isAuto) => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/auth/login`, { email, password, isAuto });
      set(() => ({
        userInfo: data.foundUser,
      }));
      set((prevState) => ({
        ...prevState,
        userInfo: {
          ...prevState.userInfo,
          purchases: data.purchases,
          reviews: data.reviews,
        },
      }));
      // cookies.set("token", data.token); // Requiere debugear el token q da el login en el back
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      throw error;
    }
  },
  changeEmail: async (email, password) => {
    try {
      await axios.post(`https://ecommerce-ropa-production.up.railway.app/auth/changeEmail`, { email, password });
    } catch (error) {
      console.error("Error al cambiar email", error);
      throw error;
    }
  },
  changePassword: async (currentPassword, newPassword) => {
    try {
      await axios.post(`https://ecommerce-ropa-production.up.railway.app/auth/changePassword`, { currentPassword, newPassword });
    } catch (error) {
      console.error("Error al cambiar contraseña", error);
      throw error;
    }
  },
  logOut: async () => {
    try {
      await axios(`https://ecommerce-ropa-production.up.railway.app/auth/logout`);
      set(() => ({
        userInfo: null,
      }));
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      throw error;
    }
  },
  reauthenticate: async (password) => {
    try {
      await axios.post(`https://ecommerce-ropa-production.up.railway.app/auth/reauthenticate`, { password });
    } catch (error) {
      console.error("Error al reatenticar usuario", error);
      throw error;
    }
  },
  deleteAccount: async (id) => {
    try {
      await axios.delete(`https://ecommerce-ropa-production.up.railway.app/auth/delete`, { id });
      set((state) => ({
        ...state,
        userInfo: null,
      }));
    } catch (error) {
      console.error("Error al borrar cuenta", error);
      throw error;
    }
  },
  getAllProducts: async () => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-ropa-production.up.railway.app/productos`,
        useStore.getState().filtros
      );
      const { count, filteredProducts } = data;
      set((state) => ({
        products: filteredProducts,
        productosFiltrados: filteredProducts.slice(0, 20),
        filtros: {
          ...state.filtros,
          productosPorPagina: 20, // Resetea a 20 por página luego de traer todo products
        },
        cantidadDeProductos: count,
      }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  getProductInfo: async () => {
    try {
      const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/infoProductos`);
      const { marcas, categorias, generos, subcategorias, colores, talles } =
        data;
      set(() => ({
        listaMarcas: marcas,
        listaCategorias: categorias,
        listaGeneros: generos,
        listaSubcategorias: subcategorias,
        listaColores: colores,
        listaTallas: talles,
      }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  setSearch: (search) => {
    set((state) => ({
      filtros: {
        ...state.filtros,
        busqueda: search,
        pagina: 1,
      },
    }));
  },
  setOrder: (value) => {
    set((state) => ({
      filtros: {
        ...state.filtros,
        ordenado: value,
      },
    }));
  },
  setOrderDirection: () => {
    set((state) => ({
      filtros: {
        ...state.filtros,
        ascendente: !state.filtros.ascendente,
      },
    }));
  },
  setPrices: (from, till) => {
    set((state) => ({
      filtros: {
        ...state.filtros,
        precioDesde: Number(from),
        precioHasta: Number(till),
      },
    }));
  },
  setFilters: (name, id) => {
    set((state) => ({
      filtrosSeleccionados: updateSelectedFilters(
        state.filtrosSeleccionados,
        id,
        name
      ),
      filtros: {
        ...state.filtros,
        [name]: toggleValue(state.filtros[name], id),
        pagina: 1,
      },
    }));
  },
  setPage: (page) => {
    set((state) => ({
      filtros: {
        ...state.filtros,
        pagina: page,
      },
    }));
  },
  resetFilter: (name) => {
    set((state) => ({
      filtrosSeleccionados: state.filtrosSeleccionados.filter((value) => {
        return value.name !== name;
      }),
      filtros: {
        ...state.filtros,
        [name]: [],
        pagina: 1,
      },
    }));
  },
  resetFilters: () => {
    set((state) => ({
      filtrosSeleccionados: [],
      filtros: {
        ...state.filtros,
        busqueda: "",
        marca: [],
        genero: [],
        categoria: [],
        subcategoria: [],
        precioDesde: "",
        precioHasta: "",
        porcentajeDeOferta: 0,
        esNuevo: null,
        color: [],
        talla: [],
        ordenado: "precio",
        ascendente: false,
        pagina: 1,
      },
    }));
  },
  getFilteredProducts: async () => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-ropa-production.up.railway.app/productos`,
        useStore.getState().filtros
      );
      const { count, productOptions, filteredProducts } = data;
      const { marcas, categorias, generos, subcategorias, colores, talles } =
        productOptions;
      set(() => ({
        productosFiltrados: filteredProducts,
        marcasDisponibles: marcas,
        categoriasDisponibles: categorias,
        generosDisponibles: generos,
        subcategoriasDisponibles: subcategorias,
        coloresDisponibles: colores,
        tallasDisponibles: talles,
        cantidadDeProductos: count,
      }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/producto/${id}`);
      const { product, reviews } = data;
      set(() => ({ productoDetail: product, productoReviews: reviews }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  setReviewsFilters: (name, value) => {
    set((state) => ({
      filtrosResenas: {
        ...state.filtrosResenas,
        [name]: value,
      },
    }));
  },
  getFilteredReviews: async () => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/resenas`, useStore.getState().filtrosResenas);
      set((state) => ({
        ...state,
        resenas: data.reviews,
        filtrosResenas: {
          ...state.filtrosResenas,
          cantidadDeResenas: data.count
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  setReviewsPage: (page) => {
    set((state) => ({
      filtrosResenas: {
        ...state.filtrosResenas,
        pagina: page,
      },
    }));
  },
  getReviewedProducts: async () => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/productoResena`, useStore.getState().userInfo.reviews);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          reviews: data
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateReview: async (id) => {
    try {
      await axios.put(`https://ecommerce-ropa-production.up.railway.app/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteReview: async (id) => {
    try {
      await axios.delete(`https://ecommerce-ropa-production.up.railway.app/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createReview: async (review) => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/resena`, review);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          reviews: data
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getFavorites: async () => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/getFavorites`, useStore.getState().userInfo.favorites);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: data,
        },
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateFavorite: async (id) => {
    try {
      const { data } = await axios.put(`https://ecommerce-ropa-production.up.railway.app/updateFavorite`, { userId: useStore.getState().userInfo._id, productId: id });
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: data,
        },
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getPurchases: async () => {
    try {
      const { data } = await axios.post(`https://ecommerce-ropa-production.up.railway.app/getPurchases`, useStore.getState().userInfo.purchases);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          purchases: data,
        },
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getCart: async (cartToken) => {
    try {
      const response = await axios.get(
        `https://ecommerce-ropa-production.up.railway.app/carrito/${cartToken}`
      );
      set(() => ({
        cart: response.data.products,
      }));
    } catch (error) {
      console.error("Error al obtener productos del carrito:", error);
    }
  },
  addToCart: async (productToAdd, token) => {
    try {
      console.log(productToAdd);
      const { data } = await axios.post(
        `https://ecommerce-ropa-production.up.railway.app/agregarCarrito`,
        { ...productToAdd, token }
      );
      console.log(data);
      if (data.carrito) {
        set({ cart: data.carrito.products });
        localStorage.setItem("cartToken", data.token);
      } else {
        console.log("No se pudo obtener el carrito actualizado del servidor");
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  },
  removeFromCart: async (variantId, token) => {
    try {
      const { data } = await axios.delete(
        `https://ecommerce-ropa-production.up.railway.app/removeFromCart`,
        {
          data: { variantId, token },
        }
      );
      set({ cart: data.carrito.products });
    } catch (error) {
      console.error("Error al eliminar producto del carrito:", error);
    }
  },
  incrementQuantity: async (variantId, token) => {
    try {
      const response = await axios.post(
        `https://ecommerce-ropa-production.up.railway.app/incrementQuantity`,
        { variantId, token }
      );
      set({ cart: response.data.carrito.products });
    } catch (error) {
      console.error(
        "Error al incrementar la cantidad del producto en el carrito:",
        error
      );
    }
  },
  decrementQuantity: async (variantId, token) => {
    try {
      const response = await axios.post(
        `https://ecommerce-ropa-production.up.railway.app/decrementQuantity`,
        { variantId, token }
      );

      set({ cart: response.data.carrito.products });
    } catch (error) {
      console.error(
        "Error al decrementar la cantidad del producto en el carrito:",
        error
      );
    }
  },
  setCart: (updatedCart) => {
    set({ cart: updatedCart });
  },
  getNuevos: async () => {
    try {
      // const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/nuevos`);
      const data = [];
      useStore.getState().products.map((producto) => {
        if (producto.productoNuevo) {
          data.push(producto);
        }
      });
      set(() => ({ nuevos: data }));
    } catch (error) {
      console.error("Error al buscar Nuevos:", error);
      throw error;
    }
  },
  getDestacados: async () => {
    try {
      // const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/destacados`);
      const data = [];
      useStore.getState().products.map((producto) => {
        if (producto.subcategoria === "Destacado") {
          data.push(producto);
        }
      });
      set(() => ({ destacados: data }));
    } catch (error) {
      console.error("Error al buscar Destacados:", error);
      throw error;
    }
  },
  getOfertas: async () => {
    try {
      // const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/ofertas`);
      const data = [];
      useStore.getState().products.map((producto) => {
        if (producto.precio < 25) {
          data.push(producto);
        }
      });
      set(() => ({ ofertas: data }));
    } catch (error) {
      console.error("Error al buscar Ofertas:", error);
      throw error;
    }
  },
  getTendencia: async () => {
    try {
      // const { data } = await axios(`https://ecommerce-ropa-production.up.railway.app/tendencia`);
      const data = [];
      useStore.getState().products.map((producto) => {
        if (producto.subcategoria === "Tendencia") {
          data.push(producto);
        }
      });
      set(() => ({ tendencia: data }));
    } catch (error) {
      console.error("Error al buscar Tendencia:", error);
      throw error;
    }
  }
}));

const toggleValue = (array, value) => {
  if (array.includes(value)) {
    return array.filter((item) => item !== value);
  } else {
    return [...array, value];
  }
};

const updateSelectedFilters = (prevSelectedFilters, id, name) => {
  const updatedFilters = [...prevSelectedFilters];
  const existingIndex = updatedFilters.findIndex((filter) => filter.id === id);

  if (existingIndex !== -1) {
    updatedFilters.splice(existingIndex, 1);
  } else {
    updatedFilters.push({ name, id });
  }

  return updatedFilters;
};
