import { create } from "zustand";
import axios from "axios";
// import productos from './utils/arrayProductos.js';

export const useStore = create((set) => ({
  products: [],
  productosFiltrados: [],
  favoritos: [1, 2, 3, 4, 5, 10, 15],
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
  cantidadDeProductos: 0,

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
          productosPorPagina: 20,
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
        value.name === name;
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
  // getFavoritos: async () => {
  //   try {
  //     const { data } = await axios(`http://localhost:3001/favoritos`);
  //     set(() => ({ favoritos: data }));
  //   } catch (error) {
  //     console.error("Error al buscar Favoritos:", error);
  //     throw error;
  //   }
  // },
  getProductById: async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/producto/${id}`);
      const { product, reviews } = data;
      set(() => ({ productoDetail: product, productoReviews: reviews }));
    } catch (error) {
      console.error(error);
    }
  },
  createReview: async (review) => {
    try {
      const { data } = await axios.post('http://localhost:3001/resena', review);
      const { newReview } = data;
      // set(() => ({  }));
    } catch (error) {
      console.error(error);
    }
  },
  addFav: async (id) => {
    try {
      // const { data } = await axios.put('http://localhost:3001/agregarFavorito', id);
      // set(() => ({ favoritos: data }));
      set((state) => ({ favoritos: [...state.favoritos, id] }));
    } catch (error) {
      console.log(error);
    }
  },
  removeFav: async (id) => {
    try {
      // const { data } = await axios.put('http://localhost:3001/removerFavorito', id);
      // set(() => ({ favoritos: data }));
      set((state) => {
        const updatedFavoritos = state.favoritos.filter((item) => item !== id);
        return { favoritos: updatedFavoritos };
      });
    } catch (error) {
      console.log(error);
    }
  },

  getCart: async (cartToken) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/carrito/${cartToken}`
      );
      set((state) => ({
        ...state,
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
