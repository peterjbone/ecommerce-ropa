import { create } from "zustand";
import axios from "axios";
import Cookies from "universal-cookie";
import * as jwt_decode from "jwt-decode";


const { VITE_BACK_URL } = import.meta.env;
const cookies = new Cookies();

export const useStore = create((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  token: '',
  setToken: (token) => set({ token }),
  userInfo: null,
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
  
  
  getAllUsers : async ()=>{
    try {
      const response= await axios.get(`${VITE_BACK_URL}/auth/admin/users`);
      return response.data
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      throw error
    }
  },
  getAllCompras : async ()=>{
    try {
      const response = await axios.get(`${VITE_BACK_URL}/auth/admin/compras`);
      return response.data
    } catch (error) {
      console.error("Error al buscar compras:", error);
      throw error
    }
  },
deleteUser : async (id)=>{
  try {
    const response = await axios.put(`{VITE_BACK_URL}/auth/admin/deleteUser/${id}`)
    return response.data
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error
  }
},
  updateUser: async (id, data) => {
    try {
      const response = await axios.put(`${VITE_BACK_URL}/auth/updateUser/${id}`, data);
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  updateUserAdmin : async (id, data) => {
    try {
      const response = await axios.put(`${VITE_BACK_URL}/auth/admin/updateUser/${id}`, data);
      return response.data
    } catch (error) {
      console.log("Error al actualizar usuario:", error);
      throw error
    }
  },
  postProduct : async (data)=>{
    const response = await axios.post(`${VITE_BACK_URL}/auth/admin/postProduct`, data);
    return response.data
  },
  removeProduct : async (id)=>{
    try {
      const response = await axios.delete(`${VITE_BACK_URL}/auth/admin/removeProduct/${id}`);
      return response.data
    } catch (error) {
      console.log("Error al eliminar producto:", error);
      throw error
    }
  },
  updateProduct : async (id, data)=>{
    try {
      const response = await axios.put(`${VITE_BACK_URL}/auth/admin/updateProduct/${id}`, data);
      return response.data
    } catch (error) {
      console.log("Error al actualizar producto:", error);
      throw error
    }
  },
    restoreSession: async () => {
    try {
      await axios(`${VITE_BACK_URL}/auth/restore`);
    } catch (error) {
      console.error("Error al restaurar la sesión", error);
      throw error;
    }
  },
  register: async (name, email, password) => {
    try {
      await axios.post(`${VITE_BACK_URL}/auth/register`, { name, email, password });
    } catch (error) {
      console.error("Error al registrar usuario", error);
      throw error;
    }
  },
  login: async (email, password, isAuto) => {
    try {
      const { data } = await axios.post(`${VITE_BACK_URL}/auth/login`, { email, password, isAuto });
      const token = data.cookies.find((cookie) => cookie.name === 'token').value
      const decodedToken = jwt_decode(token)
      const role = decodedToken.role

      set(() => ({
        userInfo: data.foundUser
      }));
      set((prevState) => ({
        ...prevState,
        userInfo: {
          ...prevState.userInfo,
          purchases: data.purchases,
          reviews: data.reviews,
        },
        token : token,
        role : role
      }));
      // cookies.set("token", data.token); // Requiere debugear el token q da el login en el back
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      throw error;
    }
  },
  changeEmail: async (email, password) => {
    try {
      await axios.post(`${VITE_BACK_URL}/auth/changeEmail`, { email, password });
    } catch (error) {
      console.error("Error al cambiar email", error);
      throw error;
    }
  },
  changePassword: async (currentPassword, newPassword) => {
    try {
      await axios.post(`${VITE_BACK_URL}/auth/changePassword`, { currentPassword, newPassword });
    } catch (error) {
      console.error("Error al cambiar contraseña", error);
      throw error;
    }
  },
  logOut: async () => {
    try {
      await axios(`${VITE_BACK_URL}/auth/logout`);
      cookies.remove("token");
      set((state) => ({
        ...state,
        userInfo: null
      }));
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      throw error;
    }
  },
  reauthenticate: async (password) => {
    try {
      await axios.post(`${VITE_BACK_URL}/auth/reauthenticate`, { password });
    } catch (error) {
      console.error("Error al reatenticar usuario", error);
      throw error;
    }
  },
  deleteAccount: async (id) => {
    try {
      await axios.delete(`${VITE_BACK_URL}/auth/delete`, { id });
      set((state) => ({
        ...state,
        userInfo: null
      }));
    } catch (error) {
      console.error("Error al borrar cuenta", error);
      throw error;
    }
  },
  getAllProducts: async () => {
    try {
      const { data } = await axios.post(
        `${VITE_BACK_URL}/productos`,
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
      const { data } = await axios(`${VITE_BACK_URL}/infoProductos`);
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
        `${VITE_BACK_URL}/productos`,
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
      const { data } = await axios(`${VITE_BACK_URL}/producto/${id}`);
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
      const { data } = await axios.post(`${VITE_BACK_URL}/resenas`, useStore.getState().filtrosResenas);
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
      const { data } = await axios.post(`${VITE_BACK_URL}/productoResena`, useStore.getState().userInfo.reviews);
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
      await axios.put(`${VITE_BACK_URL}/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteReview: async (id) => {
    try {
      await axios.delete(`${VITE_BACK_URL}/resena/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createReview: async (review) => {
    try {
      const { data } = await axios.post(`${VITE_BACK_URL}/resena`, review );
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
      const { data } = await axios.post(`${VITE_BACK_URL}/getFavorites`, useStore.getState().userInfo.favorites);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: data
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateFavorite: async (id) => {
    try {
      const { data } = await axios.put(`${VITE_BACK_URL}/updateFavorite`, { userId: useStore.getState().userInfo._id, productId: id });
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: data
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getPurchases: async () => {
    try {
      const { data } = await axios.post(`${VITE_BACK_URL}/getPurchases`, useStore.getState().userInfo.purchases);
      set((state) => ({
        ...state,
        userInfo: {
          ...state.userInfo,
          purchases: data
        }
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getCart: async (cartToken) => {
    try {
      const response = await axios.get(
        `${VITE_BACK_URL}/carrito/${cartToken}`
      );
      set(() => ({
        cart: response.data.products
      }));
    } catch (error) {
      console.error("Error al obtener productos del carrito:", error);
    }
  },
  addToCart: async (productToAdd, token) => {
    try {
      console.log(productToAdd);
      const { data } = await axios.post(
        `${VITE_BACK_URL}/agregarCarrito`,
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
        `${VITE_BACK_URL}/removeFromCart`,
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
        `${VITE_BACK_URL}/incrementQuantity`,
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
        `${VITE_BACK_URL}/decrementQuantity`,
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
      // const { data } = await axios(`${VITE_BACK_URL}/nuevos`);
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
      // const { data } = await axios(`${VITE_BACK_URL}/destacados`);
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
      // const { data } = await axios(`${VITE_BACK_URL}/ofertas`);
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
      // const { data } = await axios(`${VITE_BACK_URL}/tendencia`);
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

const checkAuthorization = () =>{
  const {token, role} = useStore.getState()
  if(!token){
    console.error('No hay token')
    return false
  }
  if(role !== 'admin'){
    console.error('No tienes permisos para realizar esta acción')
    return false
  } 
  return true
}

const handleAdminAction = async()=>{
  if(!checkAuthorization()){
    return 
    try {
      const users = await useStore.getState().getAllUsers()
      const compras = await useStore.getState().getAllCompras()
      const deleteUsuario = await useStore.getState().deleteUser(id)
      const updateUserAdmin = await useStore.getState().updateUser(id, data)
      const postProduct = await useStore.getState().postProduct(data)
      const removeProduct = await useStore.getState().removeProduct(id)
    } catch (error) {
      console.error(error)
    }
}
}

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
