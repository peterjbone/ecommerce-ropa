import React, { useState } from 'react';
import './ReviewsAcceptance.css';
import { useStore } from "../../store";

import ReviewsAcceptanceCard from '../ReviewsAcceptanceCard/ReviewsAcceptanceCard';

export default function ReviewsAcceptance() {
  const resenas = useStore(state => state.resenas);
  const [selectedTab, setSelectedTab] = useState('notAccepted');
  const [selectedSort, setSelectedSort] = useState('fecha');
  const [selectedOrder, setSelectedOrder] = useState(false);

  if (resenas.length === 0) {
    return <div>Cargando...</div>;
  }
  const reviewsToShow = resenas.filter(review => {
    switch (selectedTab) {
      case 'accepted':
        return review.esAceptada;
      case 'notAccepted':
        return !review.esAceptada;
      case 'all':
      default:
        return true;
    }
  }).sort((a, b) => {
    let result;
    const dateA = new Date(a.creadoEn);
    const dateB = new Date(b.creadoEn);
    switch (selectedSort) {
      case 'valoracion':
        result = a.valoracion - b.valoracion;
        break;
      case 'nombreUsuario':
        result = b.nombreUsuario.localeCompare(a.nombreUsuario);
        break;
      case 'fecha':
        result = dateA - dateB;
        break;
      default:
        result = 0;
        break;
    }
    return selectedOrder ? result : -result;
  });

  return (
    <div className='reviews-acceptance-container'>
      <div className='reviews-acceptance-select-container' >
        <div className='reviews-acceptance-label-button-container' >
          <label>Selección</label>
          <div className="tab-buttons">
            <button
              className={`reviews-acceptance-select-button ${selectedTab === 'notAccepted' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedTab('notAccepted')}
            >
              Por Aceptar
            </button>
            <button
              className={`reviews-acceptance-select-button ${selectedTab === 'accepted' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedTab('accepted')}
            >
              Aceptadas
            </button>
            <button
              className={`reviews-acceptance-select-button ${selectedTab === 'all' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedTab('all')}
            >
              Todas
            </button>
          </div>
        </div>
        <div className='reviews-acceptance-label-button-container' >
          <label>Orden</label>
          <div className='sort-buttons'>
            <button
              className={`reviews-acceptance-select-button ${selectedSort === 'fecha' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedSort('fecha')}
            >
              Fecha
            </button>
            <button
              className={`reviews-acceptance-select-button ${selectedSort === 'valoracion' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedSort('valoracion')}
            >
              Valoración
            </button>
            <button
              className={`reviews-acceptance-select-button ${selectedSort === 'nombreUsuario' ? 'activeSelection' : ''}`}
              onClick={() => setSelectedSort('nombreUsuario')}
            >
              Nombre de Usuario
            </button>
            <button
              className={`reviews-acceptance-select-button`}
              onClick={() => setSelectedOrder(!selectedOrder)}
            >
              {selectedOrder ? '🔼' : '🔽'}
            </button>
          </div>
        </div>
      </div>
      <div className="reviews-list">
        {reviewsToShow.map(review => (
          <ReviewsAcceptanceCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
}
