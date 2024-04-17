import styles from "./HeroImagesBarDetail.module.css";

import nextIcon from "../../assets/icons/next-icon.svg";
import perviousIcon from "../../assets/icons/previous-icon.svg";
import { useEffect, useRef, useState } from "react";

export default function HeroImagesBarDetail({ product, selectedColorIndex }) {


  const [imageIndex, setImageIndex] = useState(0);

  let autoScrollIntervalRef = useRef(null);

  useEffect(() => {

    if (product && product.opciones && product.opciones[selectedColorIndex].imagenes.length > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        showNextImage();
      }, 4000);
    }

    return () => {

      clearInterval(autoScrollIntervalRef.current);
    };
  }, [product, selectedColorIndex]);


  useEffect(() => {
    setImageIndex(0);
  }, [product, selectedColorIndex]);

  const stopAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
  };

  const resumeAutoScroll = () => {

    if (product && product.opciones[selectedColorIndex].imagenes.length > 1) {
      autoScrollIntervalRef.current = setInterval(() => {
        showNextImage();
      }, 4000);
    }
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      const nextIndex = index === product.opciones[selectedColorIndex].imagenes.length - 1 ? 0 : index + 1;
      return nextIndex;
    });
  };


  const showPrevImage = () => {
    setImageIndex((index) => {
      if (product && index === 0) return product.opciones[selectedColorIndex].imagenes.length - 1;
      return index - 1;
    });
  };


  return (
    <div className={styles.heroImagesBarContainer}>

      {product && product.opciones && product.opciones[selectedColorIndex] && product.opciones[selectedColorIndex].imagenes && product.opciones[selectedColorIndex].imagenes.length > 0 && (
        <div className={styles.heroImagesContainer}>
          {product.opciones[selectedColorIndex].imagenes?.map((imagen, i) => (
            <img
              key={i}
              src={imagen}
              alt={`Imagen ${i}`}
              className={styles.heroImage}
              style={{ transform: `translateX(${-100 * imageIndex}%)` }}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={resumeAutoScroll}
            />
          ))}
        </div>
      )}


      {product && product.opciones && product.opciones[selectedColorIndex] && product.opciones[selectedColorIndex].imagenes && product.opciones[selectedColorIndex].imagenes.length > 1 && (
        <>
          <button className={styles.heroImageButton} onClick={showPrevImage} style={{ left: 0 }}>
            <img src={perviousIcon} alt="nextIcon" />
          </button>
          <button className={styles.heroImageButton} onClick={showNextImage} style={{ right: 0 }}>
            <img src={nextIcon} alt="nextIcon" />
          </button>
          <div className={styles.heroImageDotContainer}>
            {product.opciones[selectedColorIndex].imagenes?.map((_, index) => (
              <button
                key={index}
                className={styles.heroImageDotButton}
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? "⚪" : "🔘"}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
