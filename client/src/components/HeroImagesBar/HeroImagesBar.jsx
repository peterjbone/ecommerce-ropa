import './HeroImagesBar.css'
import nextIcon from '../../assets/icons/next-icon.svg';
import perviousIcon from '../../assets/icons/previous-icon.svg';

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeroImagesBar({ products }) {

  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();
  let autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(() => {
      showNextImage();
    }, 4000);

    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  });

  const stopAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
  }

  const resumeAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      showNextImage();
    }, 4000);
    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === products.slice(0, 10).length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return products.slice(0, 10).length - 1
      return index - 1
    })
  }

  const handleHeroImageClick = (event) => {
    navigate(`/${event.target.id}`)
  }

  return (
    <div className='hero-images-bar-container' >
      <div className='hero-images-container' >
        {products.slice(0, 10).map(product => (
          <img
            key={product._id}
            id={product._id}
            src={product.opciones[0].imagenes[0]}
            alt={product.opciones[0].imagenes[0]}
            className='hero-image'
            style={{ cursor: 'pointer', translate: `${-100 * imageIndex}%` }}
            onClick={handleHeroImageClick}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={resumeAutoScroll}
          />
        ))}
        <button
          className="hero-image-button"
          onClick={showPrevImage}
          style={{ left: 0 }} >
          <img src={perviousIcon} alt='nextIcon' />
        </button>
      </div>
      <button
        onClick={showNextImage}
        className="hero-image-button"
        style={{ right: 0 }} >
        <img src={nextIcon} alt='nextIcon' />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }} >
        {products.slice(0, 10).map((_, index) => (
          <button
            key={index}
            className='hero-image-dot-button'
            onClick={() => setImageIndex(index)} >
            {index === imageIndex ? '⚪' : '🔘'}
          </button>
        ))}
      </div>
    </div>
  )
}