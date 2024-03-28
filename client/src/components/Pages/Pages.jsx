import './Pages.css';
import { useEffect, useState } from "react";
import CardsContainer from '../CardsContainer/CardsContainer';
import { useStore } from '../../store.js';

export default function Pages() {
  const products = useStore((state) => state.productosFiltrados);
  const cantidadDeProductos = useStore((state) => state.cantidadDeProductos);
  const productosPorPagina = useStore((state) => state.productosPorPagina);
  const pagina = useStore((state) => state.filtros.pagina);
  const [currentPage, setCurrentPage] = useState(pagina);
  const nPages = Math.ceil(cantidadDeProductos / productosPorPagina);

  useEffect(() => {
    if (currentPage > nPages) {
      setCurrentPage(1);
    }
  }, [currentPage, nPages]);


  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const selectPage = (event) => {
    setCurrentPage(Number(event.target.id));
  }
  return (
    <>
      <CardsContainer products={products} />
      <div className='pages-selector' >
        {(() => {
          return (
            <button
              className={(currentPage === 1 || productosPorPagina === cantidadDeProductos) ? 'invisible' : 'page-button'}
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
          const nextClassName = (currentPage === nPages || nPages === 0 || productosPorPagina === cantidadDeProductos) ? 'invisible' : 'page-button';
          return (
            <button
              className={nextClassName}
              onClick={nextPage} >
              Siguiente
            </button>
          );
        })()}
      </div>
    </>
  )
}