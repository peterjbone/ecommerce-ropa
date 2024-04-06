import './UserDashboardCard.css';

import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';

export default function UserDashboardCard({ product, isPurchase }) {
  // const user = useStore((state) => state.user);
  const user = {
    name: 'H',
    _id: 1,
    reviews: [],
  }
  const addFav = useStore((state) => state.addFav);
  const removeFav = useStore((state) => state.removeFav);
  const createReview = useStore((state) => state.createReview);
  const [isFav, setIsFav] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    rating: 1, description: '',
  });
  const [reviewDataErrors, setReviewDataErrors] = useState({
    rating: '', description: '',
  });

  useEffect(() => {
    user.reviews.map((review) => {
      if (review.producto_id === product._id) {
        setReviewData({
          rating: review.valoracion,
          description: review.descripcion,
        })
        setIsReviewed(true);
        return;
      }
    })
  });

  const handleFavorite = async () => {
    try {
      if (isFav) {
        setIsFav(false);
        await removeFav(product._id);
      } else {
        setIsFav(true);
        await addFav(product._id);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleRating = (event) => {
    event.preventDefault();
    setIsRatingModalOpen(true);
  }

  const handleRatingDataChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
    setReviewDataErrors(
      reviewValidation({
        ...reviewData,
        [name]: value
      }));
  }

  function reviewValidation(input) {
    const errors = {};

    if (input.description && input.description) {
      errors.description = 'Algo';
    }
    return errors;
  }

  const handleReviewSubmit = async () => {
    try {
      const review = {
        producto_id: product._id,
        nombreUsuario: user.name,
        usuario_id: user._id,
        valoracion: reviewData.rating,
        descripcion: reviewData.description
      }
      await createReview(review);
      handleCloseModal();
    } catch (error) {
      console.error;
    }
  }

  const handleCloseModal = () => {
    setIsRatingModalOpen(false);
  }

  return (
    <>
      <Link to={`/${product._id}`} key={product._id}>
        <div className='user-card-container'>
          <button className='user-card-favorite-button' onClick={handleFavorite}>
            {isFav ? '❤️' : '🤍'}
          </button>
          <div className='user-card-image-container'>
            <img
              src={product?.opciones[0]?.imagenes[0]}
              alt={`Imagen producto ${product.nombre}`}
            />
          </div>
          <div className='user-card-info-container'>
            <p style={{ fontSize: '20px' }}>{product.nombre}</p>
            <p>{product.marca}</p>
            {product?.opciones[0].tallas && (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {product.opciones[0].tallas.map((talla, index) => (
                  <p className='sizes' key={`${talla.stock} ${index}`}>
                    {talla.talla}
                  </p>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {product.opciones.map((opcion, index) => {
                return (
                  <div
                    key={`${opcion.colores?.codigosHex[0]} ${index}`}
                    className='colorBox'
                    style={{ backgroundColor: opcion.colores?.codigosHex[0] }}></div>
                );
              })}
            </div>
            <p style={{ fontSize: '20px' }}>
              ${' '}
              {product.precio.toLocaleString('sp-AR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </p>
          </div>
          {isPurchase &&
            <>
              <button
                className='nav-bar-button user-card-rating-button'
                onClick={handleRating}
              >
                {isReviewed
                  ? 'Editar Valoración'
                  : 'Valorar Producto'}
              </button>
            </>
          }
        </div>
      </Link>
      {isRatingModalOpen &&
        <div className='modal-overlay'>
          <div className='modal'>
            <div className='rating-card-container'>
              <div className='rating-card-data-container' >
                <div className='rating-card-image-container'>
                  <img
                    src={product?.opciones[0]?.imagenes[0]}
                    alt={`Imagen producto ${product.nombre}`}
                  />
                  <div className='rating-card-info-container'>
                    <p style={{ fontSize: '20px' }}>{product.nombre}</p>
                    <p>{product.marca}</p>
                    {product?.opciones[0].tallas && (
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {product.opciones[0].tallas.map((talla, index) => (
                          <p className='sizes' key={`${talla.stock} ${index}`}>
                            {talla.talla}
                          </p>
                        ))}
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
                      {product.opciones.map((opcion, index) => {
                        return (
                          <div
                            key={`${opcion.colores?.codigosHex[0]} ${index}`}
                            className='colorBox'
                            style={{ backgroundColor: opcion.colores?.codigosHex[0] }}></div>
                        );
                      })}
                    </div>
                    <p style={{ fontSize: '20px' }}>
                      ${' '}
                      {product.precio.toLocaleString('sp-AR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </div>
                </div>
                <p className='rating-description' >{product.descripcion}</p>
              </div>
              <form onSubmit={handleReviewSubmit} >
                <div className='user-rating-input-label-container' >
                  <label>Valoración</label>
                  <input
                    type='range'
                    key='rating'
                    id='rating'
                    name='rating'
                    value={reviewData.value}
                    onChange={handleRatingDataChange}
                  />
                </div>
                <p className={reviewDataErrors.rating ? '' : 'invisible'} >{reviewDataErrors.rating ? `${reviewDataErrors.rating}` : 'invisible'}</p>
                <div className='user-rating-input-label-container' >
                  <label>Reseña</label>
                  <textarea
                    key='description'
                    id='description'
                    name='description'
                    value={reviewData.description}
                    onChange={handleRatingDataChange}
                  />
                </div>
                <p className={reviewDataErrors.description ? '' : 'invisible'} >{reviewDataErrors.description ? `${reviewDataErrors.description}` : 'invisible'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <button
                    type='submit'
                    className='nav-bar-button user-submit-button'
                    disabled={!reviewData.rating || !reviewData.description || reviewDataErrors.rating || reviewDataErrors.description}
                  >
                    Aceptar
                  </button>
                  <button
                    className='nav-bar-button user-submit-button'
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  )
}