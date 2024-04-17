import "./ReviewCard.css";

import { useEffect, useState } from "react";
import starIcon from "../../assets/icons/star-icon.svg";
import halfStarIcon from "../../assets/icons/half-star-icon.svg";
import ReviewModal from "../ReviewModal/ReviewModal";

export default function ReviewCard({ review, handleGetReviewedProducts }) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    if (!review.product) {
      handleGetReviewedProducts();
    }
  });

  const handleReview = (event) => {
    event.preventDefault();
    setIsReviewModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsReviewModalOpen(false);
  }
  return (
    <>
      <div className="review-card-container">
        <div className="review-card-product-container" >
          <div className="review-card-image-container">
            <img
              src={review.product?.opciones[0]?.imagenes[0]}
              alt={`Imagen producto ${review.product.nombre}`}
            />
            <div className="review-card-product-info-container">
              <p style={{ fontSize: "20px" }}>{review.product.nombre}</p>
              <p>{review.product.marca}</p>
              {review.product?.opciones[0].tallas && (
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                  {review.product.opciones[0].tallas?.map((talla, index) => (
                    <p className="sizes" key={`${talla.stock} ${index}`}>
                      {talla.talla}
                    </p>
                  ))}
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
                {review.product.opciones?.map((opcion, index) => {
                  return (
                    <div
                      key={`${opcion.colores?.codigosHex[0]} ${index}`}
                      className="colorBox"
                      style={{ backgroundColor: opcion.colores?.codigosHex[0] }}></div>
                  );
                })}
              </div>
              <p style={{ fontSize: "20px" }}>
                ${" "}
                {review.product.precio.toLocaleString("sp-AR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </p>
            </div>
          </div>
          <p className="review-card-product-description" >{review.product.descripcion}</p>
        </div>
        <div className="review-card-user-review" >
          <div className="review-card-user-rating-container" >
            <div>{renderStars(review.valoracion)}</div>
            <h3>{review.valoracion.toFixed(1)}</h3>
          </div>
          <p>{review.descripcion}</p>
          <button
            className="purchase-product-review-button"
            onClick={handleReview}
          >
            Editar Reseña
          </button>
        </div>
      </div>
      {isReviewModalOpen && (
        <ReviewModal product={review.product} review={review} handleCloseModal={handleCloseModal} />
      )}
    </>
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