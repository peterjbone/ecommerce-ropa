import { create } from 'zustand';
import axios from 'axios';
import productos from './utils/arrayProductos.js';

export const useStore = create((set) => ({
  products: productos,
  productosFiltrados: productos,
  favoritos: [],
  carrito: [],
  nuevos: [],
  destacados: [],
  ofertas: [],
  tendencia: [],
  filtros: {
    busqueda: '',
    precioDesde: 0,
    precioHasta: '',
    conOfertas: false, // o porcentageDeOferta: 0,
    esNuevo: false,
    categorias: [],
    generos: [],
    subcategorias: [],
    colores: [],
    tallas: [],
    ordenadoPor: '',
    ascendente: false,
    pagina: 1,
  },

  getAllProducts: async () => {
    try {
      // const { data } = await axios(`http://localhost:3001/todos`);
      const data = [...productos];
      set(() => ({ products: data, productosFiltrados: data }));
    } catch (error) {
      console.error("Error al buscar Todo:", error);
      throw error;
    }
  },
  getFilteredProducts: async () => {
    try {

      // const { data } = await axios(`http://localhost:3001/todos`);
      const data = [...productos];
      set(() => ({ products: data, productosFiltrados: data }));
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
      })
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
      })
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
      })
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
      })
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
  }
}));