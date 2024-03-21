import { useState } from 'react'
import './HeroImagesBar.css'

export default function HeroImagesBar({ products }) {

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === products.slice(0, 10).length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return products.slice(0, 10).length - 1
      return index - 1
    })
  }

  return (
    <div className='hero-images-bar-container' >
      <div className='hero-images-container' >
        {products.slice(0, 10).map(product => (
          <img
            key={product.id}
            src={product.imagen[0]}
            alt={product.imagen[0]}
            className='hero-image'
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      <button
        className="hero-image-button"
        onClick={showPrevImage}
        style={{ left: 0 }} >
        ⬅️
      </button>
      </div>
      <button
        onClick={showNextImage}
        className="hero-image-button"
        style={{ right: 0 }} >
        ➡️
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