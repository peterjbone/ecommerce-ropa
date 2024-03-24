import './Pages.css';
import { useEffect, useState } from "react";
import CardsContainer from '../CardsContainer/CardsContainer';

export default function Pages({ cardsPerPage, cards }) {
  const [currentPage, setCurrentPage] = useState(1);
  const finalIndex = currentPage * cardsPerPage;
  const initialIndex = finalIndex - cardsPerPage;
  const products = (cards.slice(initialIndex, finalIndex));
  const nPages = Math.ceil(cards.length / cardsPerPage);


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
              className={(currentPage === 1 || cardsPerPage === cards.length) ? 'invisible' : 'page-button'}
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
          const nextClassName = (currentPage === nPages || nPages === 0 || cardsPerPage === cards.length) ? 'invisible' : 'page-button';
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