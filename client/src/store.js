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
  },
  marcasDisponibles: [],
  categoriasDisponibles: [],
  generosDisponibles: [],
  subcategoriasDisponibles: [],
  coloresDisponibles: [],
  tallasDisponibles: [],
  cantidadDeProductos: 0,
  productosPorPagina: 20,

  getAllProducts: async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/productos`,
        useStore.getState().filtros
      );
      const { filteredProducts } = data;
      set(() => ({
        products: filteredProducts,
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
      filtros: {
        ...state.filtros,
        [name]: toggleValue(state.filtros[name], id),
        pagina: 1,
      },
    }));
  },
  setPage: (page) => {
    console.log(page);
    set((state) => ({
      filtros: {
        ...state.filtros,
        pagina: page,
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
      set(() => ({ productoDetail: data }));
    } catch (error) {
      console.log(error);
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

  addToCart: (productToAdd) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (product) => product.variantId === productToAdd.variantId
      );

      if (existingProduct) {
        const updatedCart = state.cart.map((product) =>
          product.variantId === productToAdd.variantId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
        return { ...state, cart: updatedCart };
      }
    });
  },

  removeFromCart: (productId) => {
    set((state) => {
      const updatedCart = state.cart.filter(
        (product) => product.variantId !== productId
      );
      return { ...state, cart: updatedCart };
    });
  },

  incrementQuantity: (productId) => {
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product.variantId === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return { ...state, cart: updatedCart };
    });
  },

  decrementQuantity: (productId) => {
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product.variantId === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      return { ...state, cart: updatedCart };
    });
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
