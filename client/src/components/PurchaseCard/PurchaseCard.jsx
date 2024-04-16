import "./PurchaseCard.css";

import { useStore } from "../../store";
import { useEffect, useState } from "react";
import ReviewModal from "../ReviewModal/ReviewModal";

export default function PurchaseCard({ purchase }) {
  const userInfo = useStore((state) => state.userInfo);
  const [productToReview, setProductToReview] = useState(false);
  const [review, setReview] = useState({});
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  useEffect(() => {
    if (productToReview) {
      const matchedReview = userInfo.reviews.find(review => review.producto_id === productToReview._id);
      if (matchedReview) {
        setReview(matchedReview);
      } else {
        setReview({
          valoracion: 0.5,
          descripcion: "",
        });
      }
      setIsRatingModalOpen(true);
    }
  }, [productToReview, userInfo.reviews]);

  const handleReview = (event, product) => {
    event.preventDefault();
    setProductToReview(product);
  }
  const handleCloseModal = () => {
    setIsRatingModalOpen(false);
    setProductToReview(false);
    setReview(false);
  }

  return (
    <>
      <div className="purchase-card-container">
        <div className="purchase-products-container">
          {purchase.products.map((prod, index) => (
            <div key={index} className="purchase-product-container">
              <div className="purchase-image-container">
                <img src={prod.product.opciones.find(opcion => opcion.colores.nombres[0] === prod.productColor).imagenes[0]} alt={purchase.paymentIntentId + index} />
              </div>
              <div className="purchase-product-info">
                <div className="purchase-title-value-container">
                  <p>Nombre: </p>
                  <p>{prod.product.nombre}</p>
                </div>
                <div className="purchase-title-value-container">
                  <p>Marca: </p>
                  <p>{prod.product.marca}</p>
                </div>
                <div className="purchase-title-value-container">
                  <p>Color: </p>
                  <p>{prod.productColor}</p>
                </div>
                <div className="purchase-title-value-container">
                  <p>Talle: </p>
                  <p>{prod.productSize}</p>
                </div>
                <div className="purchase-title-value-container">
                  <p>Cantidad: </p>
                  <p>{prod.quantity}</p>
                </div>
                <div className="purchase-title-value-container">
                  <p>Precio: </p>
                  <p>$ {prod.product.precio}</p>
                </div>
                <button
                  className="purchase-product-review-button"
                  onClick={event => handleReview(event, prod.product)}
                >
                  {(() => {
                    for (const review of userInfo.reviews) {
                      if (review.producto_id === prod.product._id) {
                        return "Editar Valoración";
                      }
                    }
                    return "Valorar Producto";
                  })()}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="purchase-card-title">
          <div className="purchase-title-value-container">
            <p>Fecha: </p>
            <p>{new Date(purchase.createdAt).toLocaleString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <div>
            <p>Envío: </p>
            <div className="purchase-title-value-container">
              <p>País: </p>
              <p>{purchase.shipping.address.country}</p>
            </div>
            <div className="purchase-title-value-container">
              <p>Provincia / Estado: </p>
              <p>{purchase.shipping.address.state}</p>
            </div>
            <div className="purchase-title-value-container">
              <p>Ciudad: </p>
              <p>{purchase.shipping.address.city}</p>
            </div>
            <div className="purchase-title-value-container">
              <p>Dirección: </p>
              <p>{purchase.shipping.address.line1} {purchase.shipping.address.line2}</p>
            </div>
            <div className="purchase-title-value-container">
              <p>Código Postal: </p>
              <p>{purchase.shipping.address.postal_code}</p>
            </div>
            <div className="purchase-title-value-container">
              <p>Estado De Envío: </p>
              <p>{purchase.delivery_status}</p>
            </div>
          </div>
          <div className="purchase-title-value-container">
            <p>Estado De Pago: </p>
            <p>{purchase.payment_status}</p>
          </div>
          <div className="purchase-title-value-container">
            <p>Total: </p>
            <p>$ {(purchase.total / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true, decimalSeparator: ",", groupingSeparator: "." })}</p>
          </div>
        </div>
      </div>
      {isRatingModalOpen && (
        <ReviewModal product={productToReview} review={review} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}