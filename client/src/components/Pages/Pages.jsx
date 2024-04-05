import './Pages.css';
import { useEffect, useState } from "react";
import CardsContainer from '../CardsContainer/CardsContainer';
import { useStore } from '../../store.js';

export default function Pages() {
  const products = useStore((state) => state.productosFiltrados);
  const setPage = useStore((state) => state.setPage);
  const getFilteredProducts = useStore((state) => state.getFilteredProducts);
  const cantidadDeProductos = useStore((state) => state.cantidadDeProductos);
  const filtros = useStore((state) => state.filtros);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);
  const filtrosSeleccionados = useStore((state) => state.filtrosSeleccionados);
  const pagina = useStore((state) => state.filtros.pagina);
  const [currentPage, setCurrentPage] = useState(pagina);
  const nPages = Math.ceil(cantidadDeProductos / filtros.productosPorPagina);

  useEffect(() => {
    if (currentPage > nPages) {
      setCurrentPage(1);
    }
  }, [currentPage, nPages]);

  const previousPage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      try {
        setPage(currentPage - 1);
        await getFilteredProducts();
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const nextPage = async () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      try {
        setPage(currentPage + 1);
        await getFilteredProducts();
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const selectPage = async (event) => {
    setCurrentPage(Number(event.target.id));
    try {
      setPage(Number(event.target.id));
      await getFilteredProducts();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  }
  const handleOptionChange = async (event) => {
    try {
      const { id } = event.target;
      const name = event.target.getAttribute('name');
      setFilters(name, id);
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }
  }
  const handleReset = async () => {
    try {
      resetFilters();
      await getFilteredProducts();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className={`selected-list ${filtrosSeleccionados.length === 0 ? 'invisible' : ''}`}>
        <p
          className={filtrosSeleccionados.length === 0 ? 'invisible' : ''}
          onClick={handleReset}
        >
          Resetear Todo ✖️
        </p>
        {filtrosSeleccionados.map((filter) => {
          return (
            <p
              key={filter.id}
              id={filter.id}
              name={filter.name}
              onClick={handleOptionChange}
            >
              {filter.id} ✖️
            </p>)
        })}
      </div>
      <CardsContainer products={products} />
      <div className='pages-selector' >
        {(() => {
          return (
            <button
              className={(currentPage === 1 || filtros.productosPorPagina === cantidadDeProductos) ? 'invisible' : 'page-button'}
              onClick={previousPage} >
              Anterior
            </button>
          );
        })()}
        {Array.from({ length: nPages }, (_, i) => (
          <button
            className={currentPage === i + 1 ? 'selected-page' : 'page-button'}
            key={i}
            id={i + 1}
            disabled={currentPage === i + 1}
            onClick={selectPage} >
            {i + 1}
          </button>
        ))}
        {(() => {
          const nextClassName = (currentPage === nPages || nPages === 0 || filtros.productosPorPagina === cantidadDeProductos) ? 'invisible' : 'page-button';
          return (
            <button
              className={nextClassName}
              onClick={nextPage} >
              Siguiente
            </button>
          );
        })()}
      </div>
    </div>
  )
}