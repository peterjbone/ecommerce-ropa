import { useState } from 'react';
import starIcon from '../../assets/icons/star-icon.svg';
import halfStarIcon from '../../assets/icons/half-star-icon.svg';
import './Reviews.css';

export default function Reviews({ reviews }) {
  const { allReviews, topReviews, bottomReviews, averageReviews, randomReviews } = reviews;
  const [selectedTab, setSelectedTab] = useState('average');
  const [selectedOrder, setSelectedOrder] = useState('average');
  const [sortedReviews, setSortedReviews] = useState(allReviews);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const reviewsToShow = (() => {
    switch (selectedTab) {
      case 'average':
        return averageReviews;
      case 'top':
        return topReviews;
      case 'bottom':
        return bottomReviews;
      case 'random':
        return randomReviews;
      case 'all':
        return sortedReviews;
      default:
        return sortedReviews;
    }
  })();

  const handleSortClick = (sortOrder) => {
    let sorted;
    if (sortOrder === 'asc') {
      sorted = [...reviewsToShow].sort((a, b) => a.valoracion - b.valoracion);
    } else if (sortOrder === 'desc') {
      sorted = [...reviewsToShow].sort((a, b) => b.valoracion - a.valoracion);
    } else {
      sorted = reviewsToShow;
    }
    setSortedReviews(sorted);
    setSelectedOrder(sortOrder);
  };

  return (
    <div className="reviews-container">
      {allReviews.length !== 0 ? (
        <>
          <div className="tab-buttons">
            <button
              className={`nav-bar-button ${selectedTab === 'average' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('average')}
            >
              Promedio
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'top' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('top')}
            >
              Mejores
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'bottom' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('bottom')}
            >
              Peores
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'random' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('random')}
            >
              Random
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'all' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('all')}
            >
              Todos
            </button>
          </div>
          {selectedTab === 'all' ? (
            <div className='sort-buttons'>
              <button
                className={`nav-bar-button ${selectedOrder === 'asc' ? 'activeTab' : ''}`}
                onClick={() => handleSortClick('asc')}
              >
                Ascendente
              </button>
              <button
                className={`nav-bar-button ${selectedOrder === 'desc' ? 'activeTab' : ''}`}
                onClick={() => handleSortClick('desc')}
              >
                Descendente
              </button>
            </div>
          ) : null}
          {reviewsToShow.map((review, index) => (
            <div className='review-container' key={index}>
              {console.log(review)}
              <div className='rating-container'>
                <h3>{review.valoracion}</h3>
                <div>{renderStars(review.valoracion)}</div>
              </div>
              <h4>{review.nombreUsuario}</h4>
              <p>{review.descripcion}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="no-reviews">Lo lamentamos, no hay reseñas para este producto aún</div>
      )}
    </div>
  )
}

const renderStars = valoracion => {
  const fullStars = Math.floor(valoracion);
  const hasHalfStar = valoracion - fullStars === 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src={starIcon} alt="star" />);
  }

  if (hasHalfStar) {
    stars.push(<img key="half" src={halfStarIcon} alt="half-star" className="half-star" />);
  }

  return stars;
}