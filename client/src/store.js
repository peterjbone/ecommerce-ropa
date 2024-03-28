import { create } from 'zustand';
import axios from 'axios';
import productos from './utils/arrayProductos.js';

export const useStore = create((set, get) => ({
  products: productos,
  productosFiltrados: productos,
  favoritos: [1, 2, 3, 4, 5, 10, 15],
  carrito: [],
  nuevos: [],
  destacados: [],
  ofertas: [],
  tendencia: [],
  listaMarcas: [],
  listaCategorias: [],
  listaGeneros: [],
  listaSubcategorias: [],
  listaColores: [],
  listaTallas: [],
  filtros: {
    busqueda: '',
    precioDesde: 0,
    precioHasta: '',
    conOfertas: false, // o porcentajeDeOferta: 0,
    esNuevo: false,
    categoria: [],
    genero: [],
    subcategoria: [],
    colores: [],
    tallas: [],
    ordenadoPor: '',
    ascendente: false,
    pagina: 1,
  },

  getProductInfo: async () => {
    try {
      const { data } = await axios(`http://localhost:3001/infoProductos`);
      const { marcas, categorias, generos, subcategorias, colores, talles } = data;
      set(() => ({
        listaMarcas: marcas,
        listaCategorias: categorias,
        listaGeneros: generos,
        listaSubcategorias: subcategorias,
        listaColores: colores,
        listaTallas: talles
      }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  getFilteredProducts: async () => {
    try {
      const { data } = await axios.post(`http://localhost:3001/productos`);
      console.log(data);
      set(() => ({ products: [...productos], productosFiltrados: data }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  getNuevos: async () => {
    try {
      // const { data } = await axios(`http://localhost:3001/nuevos`);
      const data = [];
      productos.map(producto => {
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
      productos.map(producto => {
        if (producto.subcategoria === 'Destacado') {
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
      productos.map(producto => {
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
      productos.map(producto => {
        if (producto.subcategoria === 'Tendencia') {
          data.push(producto);
        }
      });
      set(() => ({ tendencia: data }));
    } catch (error) {
      console.error("Error al buscar Tendencia:", error);
      throw error;
    }
  },
  getSubcategoria: async (categoria) => {
    try {
      // const { data } = await axios(`http://localhost:3001/subcategoria`);
      const data = [];
      productos.map(producto => {
        // console.log(producto.subcategoria, categoria);
        if (producto.subcategoria === categoria) {
          data.push(producto);
        }
      })
      set(() => ({ productosFiltrados: data }));
    } catch (error) {
      console.error("Error al buscar por Subcategoria:", error);
      throw error;
    }
  },
  search: async (search) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/?buscar=${search}`);
      set(() => ({ products: data }));
    } catch (error) {
      console.error("Error al buscar:", error);
      throw error;
    }
  },
  getFavoritos: async () => {
    try {
      const { data } = await axios(`http://localhost:3001/favoritos`);
      set(() => ({ favoritos: data }));
    } catch (error) {
      console.error("Error al buscar Favoritos:", error);
      throw error;
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
  }
}));