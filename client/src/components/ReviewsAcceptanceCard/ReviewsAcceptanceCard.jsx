import './ReviewsAcceptanceCard.css';
import { useStore } from "../../store";

import starIcon from '../../assets/icons/star-icon.svg';
import halfStarIcon from '../../assets/icons/half-star-icon.svg';

export default function ReviewsAcceptanceCard({ review, isAccepted }) {
  const getAllReviews = useStore(state => state.getAllReviews);
  const updateReview = useStore(state => state.updateReview);
  const deleteReview = useStore(state => state.deleteReview);

  console.log(review);

  console.log(review);

  const handleAcceptReview = async (id) => {
    try {
      await updateReview(id);
      await getAllReviews();
    } catch (error) {
      console.error;
    }
  }
  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id);
      await getAllReviews();
    } catch (error) {
      console.error;
    }
  }

  return (
    <div className='review-card-container' >
      <div style={{ display: 'flex' }} >
        <div className='rating-container acceptance-rating-container'>
          <h4>{review.nombreUsuario}</h4>
          <h3>{review.valoracion.toFixed(1)}</h3>
          <div>{renderStars(review.valoracion)}</div>
        </div>
      </div>
      <p>{review.descripcion}</p>
      <div className='review-acceptance-button-container' >
        <button
          className={`review-acceptance-button ${review.esAceptada ? 'review-acceptance-accept-button' : 'review-acceptance-delete-button'}`}
          onClick={() => handleAcceptReview(review._id)}
        >
          {review.esAceptada ? 'Aceptar' : 'Cancelar'}
        </button>
        <button
          className='review-acceptance-button review-acceptance-delete-button'
          onClick={() => handleDeleteReview(review._id)}
        >
          Eliminar
        </button>
      </div>
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