import { create } from "zustand";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const useStore = create((set) => ({
  user: null,
  userInfo:
    typeof localStorage !== "undefined" && localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  products: [],
  productosFiltrados: [],
  favoritos: [],
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

  getUserById: async (userId) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/auth/${userId}`);
      set({ user: data });
    } catch (error) {
      console.error("Error al buscar usuario por Id:", error);
      throw error;
    }
  },
  setUserInfo: (data) => {
    localStorage.setItem("userInfo", JSON.stringify({ ...data }));
    set(() => ({
      userInfo: { ...data },
    }));
  },
  clearUserInfo: () => {
    localStorage.removeItem("userInfo");
    set(() => ({
      userInfo: null,
    }));
  },
  register: async (name, email, password) => {
    try {
      await axios.post("http://localhost:3001/auth/register", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.error("Error al registrar usuario", error);
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
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
      await axios.post("http://localhost:3001/auth/changeEmail", {
        email,
        password,
      });
    } catch (error) {
      console.error("Error al cambiar email", error);
      throw error;
    }
  },
  changePassword: async (currentPassword, newPassword) => {
    try {
      await axios.post("http://localhost:3001/auth/changePassword", {
        currentPassword,
        newPassword,
      });
    } catch (error) {
      console.error("Error al cambiar contraseña", error);
      throw error;
    }
  },
  logOut: async () => {
    try {
      await axios("http://localhost:3001/auth/logout");
      set((state) => ({
        ...state,
        userInfo: null,
      }));
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      throw error;
    }
  },
  reauthenticate: async (password) => {
    try {
      await axios.post("http://localhost:3001/auth/reauthenticate", {
        password,
      });
    } catch (error) {
      console.error("Error al reatenticar usuario", error);
      throw error;
    }
  },
  deleteAccount: async (id) => {
    try {
      await axios.delete("http://localhost:3001/auth/delete", { id });
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
        `http://localhost:3001/productos`,
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
      const { data } = await axios(`http://localhost:3001/infoProductos`);
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
        `http://localhost:3001/productos`,
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
      const { data } = await axios(`http://localhost:3001/producto/${id}`);
      const { product, reviews } = data;

      if (product) {
        set(() => ({
          productoDetail: product,
          productoReviews: reviews || [],
        }));
      } else {
        console.log("No se encontró el producto.");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  },

  getAllReviews: async () => {
    try {
      const { data } = await axios("http://localhost:3001/resena");
      set(() => ({
        resenas: data,
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateReview: async (id) => {
    try {
      await axios(`http://localhost:3001/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteReview: async (id) => {
    try {
      await axios.delete(`http://localhost:3001/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createReview: async (review) => {
    try {
      const { data } = await axios.post("http://localhost:3001/resena", {
        review,
      });
      set((state) => ({
        ...state.userInfo,
        reviews: data,
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateFavorite: async (id) => {
    try {
      const { data } = await axios.put("http://localhost:3001/updateFavorite", {
        userId: useStore.getState().userInfo._id,
        productId: id,
      });
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
  getFavorites: async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/getFavorites",
        useStore.getState().userInfo.favorites
      );
      set(() => ({ favoritos: data }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  addFav: (id) => {
    try {
      set((state) => ({ favoritos: [...state.favoritos, id] }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  removeFav: (id) => {
    try {
      set((state) => {
        const updatedFavoritos = state.favoritos.filter((item) => item !== id);
        return { favoritos: updatedFavoritos };
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getCart: async (cartToken) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/carrito/${cartToken}`
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
        "http://localhost:3001/agregarCarrito",
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
        "http://localhost:3001/removeFromCart",
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
        "http://localhost:3001/incrementQuantity",
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
        "http://localhost:3001/decrementQuantity",
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
  clearCart: () => {
    set({ cart: [] });
  },
  getNuevos: async () => {
    try {
      // const { data } = await axios(`http://localhost:3001/nuevos`);
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
      // const { data } = await axios(`http://localhost:3001/destacados`);
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
      // const { data } = await axios(`http://localhost:3001/ofertas`);
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
      // const { data } = await axios(`http://localhost:3001/tendencia`);
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
  },
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
