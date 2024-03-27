import './Card.css';

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { useStore } from '../../store.js';

export default function Card({ product, isProductsBar, title, productPosition }) {
  const favoritos = useStore((state) => state.favoritos);
  const addFav = useStore((state) => state.addFav);
  const removeFav = useStore((state) => state.removeFav);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = async () => {
    try {
      if (isFav) {
        setIsFav(false);
        await removeFav(product.id);
      } else {
        setIsFav(true);
        await addFav(product.id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    favoritos?.forEach((fav) => {
      if (fav === product.id) {
        setIsFav(true);
      }
    });
  }, [favoritos, product.id]);

  return (
    isProductsBar ? (
      <div key={`${title}/${product.id}`} className='product-container' style={{ transition: '300ms ease-in-out', transform: `translateX(${productPosition * -205 * 5}px)` }}>
        <button className='card-favorite-button' onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
        <div className='product-image-container'>
          <Link to={`/${product.id}`}>
            <img src={product.imagen[0]} alt={product.imagen[0]} className='image' />
          </Link>
        </div>
        <h4>{product.nombre}</h4>
        <p>${product.precio}</p>
        <button className='product-add-to-cart-button'>Agregar Al Carrito</button>
      </div>
    ) : (
      <div className='card-container'>
        <button className='card-favorite-button' onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
        <div className='card-image-container'>
          <Link to={`/${product.id}`} key={product.id}>
            <img src={product.imagen[0]} alt={`Imagen producto ${product.name}`} />
          </Link>
        </div>
        <div className='card-info-container'>
          <p style={{ fontSize: '20px' }}>{product.nombre}</p>
          <p>{product.marca}</p>
          {product?.tallas && (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {product.tallas.map(talla => (
                <p className='sizes' key={talla}>{talla}</p>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {product.opcion.map((opcion, index) => {
              const { codHexadecimal } = opcion.color;
              return (
                <div
                  key={index}
                  className='colorBox'
                  style={{ backgroundColor: codHexadecimal }}
                ></div>
              );
            })}
          </div>
          <p style={{ fontSize: '20px' }}>$ {product.precio.toLocaleString('sp-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
      </div>
    )
  )
}