import { create } from 'zustand';
import axios from 'axios';
import productos from './utils/arrayProductos.js';

export const useStore = create((set) => ({
  products: [],
  favoritos: [],
  destacados: [],
  nuevos: [],
  ofertas: [],

  getDestacados: async () => {
    try {
      // const { data } = await axios(`http://localhost:3001/destacados`);
      const data = [];
      productos.map(producto => {
        if (producto.precio > 50) {
          data.push(producto);
        }
      })
      set(() => ({ destacados: data }));
    } catch (error) {
      console.error("Error occurred while getting Destacados:", error);
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
      console.error("Error occurred while getting Nuevos:", error);
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
      console.error("Error occurred while getting Ofertas:", error);
      throw error;
    }
  },
  search: async (search) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/?buscar=${search}`);
      set(() => ({ products: data}));
    } catch (error) {
      console.error("Error occurred while searching:", error);
      throw error;
    }
  }
}));