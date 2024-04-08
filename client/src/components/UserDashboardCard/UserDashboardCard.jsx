import './UserDashboardCard.css';

import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';

export default function UserDashboardCard({ product, isPurchase }) {
  const user = {
    name: 'H',
    _id: 1,
    reviews: [],
  }
  const userInfo = useStore((state) => state.userInfo);
  const favoritos = useStore((state) => state.favoritos);
  const updateFavorite = useStore((state) => state.updateFavorite);
  const createReview = useStore((state) => state.createReview);
  const addFav = useStore((state) => state.addFav);
  const removeFav = useStore((state) => state.removeFav);
  const [isFav, setIsFav] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [rating, setRating] = useState(0.5);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('La descripción debe tener al menos 50 caracteres.');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    userInfo.reviews.map((review) => {
      if (review.producto_id === product._id) {
        setRating(review.valoracion);
        setDescription(review.descripcion);
        setIsReviewed(true);
        return;
      }
    });
  }, [userInfo, product._id]);

  useEffect(() => {
    let tempFavorites;
    if (userInfo) {
      tempFavorites = [...userInfo.favorites];
    } else {
      tempFavorites = [...favoritos];
    }
    tempFavorites?.forEach((fav) => {
      if (fav === product._id) {
        setIsFav(true);
      }
    });
  }, [userInfo, favoritos, product._id]);

  const handleFavorite = async () => {
    try {
      if (userInfo) {
        await updateFavorite(product._id);
      } else {
        if (isFav) {
          setIsFav(false);
          removeFav(product._id);
        } else {
          setIsFav(true);
          addFav(product._id);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleReview = (event) => {
    event.preventDefault();
    setIsRatingModalOpen(true);
  }
  const handleReviewDescriptionChange = (event) => {
    const { value } = event.target;
    if (value.length < 500) {
      setDescription(value);
    }
    setWordCount(value.length);
    setDescriptionError(reviewValidation(description));
  }
  function reviewValidation(description) {
    let error = '';

    if (description.length < 50) {
      error = 'La descripción debe tener al menos 50 caracteres.';
    }
    return error;
  }
  const handleHoverColorFill = (index) => {
    if (!index && rating !== 0.5) {
      setHoverIndex(rating * 2 - 1);
    } else {
      setHoverIndex(index);
    }
  }
  const handleReviewSubmit = async () => {
    try {
      const review = {
        producto_id: product._id,
        nombreUsuario: user.name,
        usuario_id: user._id,
        valoracion: rating,
        descripcion: description
      }
      await createReview(review);
      handleCloseModal();
    } catch (error) {
      console.error;
    }
  }
  const handleCloseModal = () => {
    setIsRatingModalOpen(false);
    setRating(0.5);
    setDescription('');
    setDescriptionError('');
    setWordCount(0);
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
                onClick={handleReview}
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
            <div className='review-card-container'>
              <div className='review-card-product-container' >
                <div className='review-card-image-container'>
                  <img
                    src={product?.opciones[0]?.imagenes[0]}
                    alt={`Imagen producto ${product.nombre}`}
                  />
                  <div className='review-card-product-info-container'>
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
                <p id='review-card-product-description' >{product.descripcion}</p>
              </div>
              <form onSubmit={handleReviewSubmit} >
                <div className='user-rating-stars-headline-container' >
                  <div className='user-rating-input-label-container' >
                    <label>Valoración</label>
                    <div className='rating-container  create-review-rating-container'>
                      {[...Array(10)].map((_, index) => (
                        <div
                          key={index}
                          className={`star-container-${index}`}
                          onMouseEnter={() => handleHoverColorFill(index)}
                          onMouseLeave={() => handleHoverColorFill(null)}
                          onClick={() => setRating((Number(index) + 1) / 2)}
                        >
                          <div className="svg-wrapper">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.555 23.411-6.664-3.285c-.163-.082-.355-.13-.559-.13-.235 0-.455.064-.643.175l.006-.003-6.416 3.75c-.086.05-.19.079-.3.079-.336 0-.609-.273-.609-.609 0-.033.003-.064.007-.096v.003l.994-7.542c.007-.049.011-.105.011-.162 0-.364-.155-.691-.403-.92l-.001-.001-4.571-4.247c-.248-.231-.402-.56-.402-.924 0-.625.454-1.144 1.05-1.246l.007-.001 5.987-1.108c.421-.078.765-.355.935-.727l.003-.008 2.491-5.663c.204-.444.646-.746 1.157-.746.48 0 .897.266 1.114.659l.003.007 2.881 5.471c.197.365.558.62.981.666h.006l6.045.681c.647.061 1.149.601 1.149 1.259 0 .332-.128.635-.338.86l.001-.001-4.27 4.562c-.211.224-.341.527-.341.86 0 .088.009.173.026.256l-.001-.008 1.52 7.453c.009.04.015.086.015.134 0 .337-.273.61-.61.61-.095 0-.185-.022-.265-.061l.004.002z" fill={index <= hoverIndex ? 'rgb(255, 238, 0)' : ''} /></svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h2>{rating}</h2>
                </div>
                <div className='user-rating-input-label-container' >
                  <label>Reseña</label>
                  <textarea
                    key='description'
                    value={description}
                    onChange={handleReviewDescriptionChange}
                  />
                </div>
                <label style={{ alignSelf: 'flex-end'}} >{wordCount} / 500 </label>
                <p className={descriptionError ? '' : 'invisible'} >{descriptionError ? `${descriptionError}` : 'invisible'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <button
                    type='submit'
                    className='nav-bar-button user-submit-button review-accept-button'
                    disabled={!description || descriptionError}
                  >
                    Aceptar
                  </button>
                  <button
                    className='nav-bar-button user-submit-button review-cancel-button'
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
            <button className='nav-bar-button review-close-button' onClick={handleCloseModal} >
              <svg viewBox="0 0 24 24">
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" />
              </svg>
            </button>
          </div>
        </div>
      }
    </>
  )
}