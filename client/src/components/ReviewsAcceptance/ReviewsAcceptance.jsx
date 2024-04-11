import './ReviewsAcceptance.css';
import { useStore } from "../../store";

import ReviewsAcceptanceCard from '../ReviewsAcceptanceCard/ReviewsAcceptanceCard';

export default function ReviewsAcceptance() {
  const resenas = useStore(state => state.resenas);

  return (
    <div className='reviews-acceptance-container' >
      {resenas && resenas.map(review => (
        // {review.esAceptada ? 
        <ReviewsAcceptanceCard key={review._id} review={review} isAccepted={false} />
        // : null }
      ))}
    </div>
  )
}