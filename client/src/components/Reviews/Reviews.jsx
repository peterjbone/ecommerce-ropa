import { useState } from 'react';
import starIcon from '../../assets/icons/star-icon.svg';
import halfStarIcon from '../../assets/icons/half-star-icon.svg';
import './Reviews.css';

export default function Reviews(/* { reviews } */) {
  // const { allReviews, topReviews, bottomReviews, averageReviews, randomReviews } = reviews;
  const topReviews = [
    {
      valoracion: 4.5,
      nombreUsuario: 'John Doe',
      descripcion: 'Este producto es realmente excelente. Cumple con todas mis expectativas y más. Lo recomendaría sin dudarlo.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Jane Smith',
      descripcion: 'Increíble producto. Me ha sorprendido gratamente. Es de alta calidad y vale cada centavo.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Juan Pérez',
      descripcion: 'Estoy muy satisfecho con este producto. Ha mejorado mi vida de manera significativa. Lo compraría de nuevo.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'María García',
      descripcion: 'No puedo decir suficientes cosas buenas sobre este producto. Es impresionante y ha superado mis expectativas.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Carlos López',
      descripcion: 'Definitivamente, este producto es de primera calidad. Me encanta y lo recomendaría a mis amigos y familiares.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Laura Martínez',
      descripcion: 'Este producto ha cambiado mi vida. Estoy muy contenta con mi compra y lo volvería a adquirir sin dudarlo.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Pedro Rodríguez',
      descripcion: 'Excelente producto que cumple con todas mis necesidades. Estoy muy satisfecho con su desempeño.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Ana Fernández',
      descripcion: 'Sin duda, este producto es de alta calidad. Lo he estado usando durante semanas y no tengo quejas.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Miguel Torres',
      descripcion: 'Estoy impresionado con la excelencia de este producto. Ha superado mis expectativas en todos los aspectos.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Sofía Ramírez',
      descripcion: 'Este producto es increíble. Lo he estado recomendando a todos mis amigos. No te arrepentirás de comprarlo.',
    }
  ];

  const bottomReviews = [
    {
      valoracion: 1.5,
      nombreUsuario: 'John Doe',
      descripcion: 'No me gusta este producto en absoluto. Es de baja calidad y no cumple con lo prometido.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Jane Smith',
      descripcion: 'Me arrepiento de haber comprado este producto. No funciona correctamente y es una completa pérdida de dinero.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Juan Pérez',
      descripcion: 'No recomendaría este producto a nadie. Es una decepción total y no cumple con las expectativas.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'María García',
      descripcion: 'Este producto es un fracaso. No vale la pena el precio y no hace lo que se supone que debe hacer.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Carlos López',
      descripcion: 'Estoy extremadamente insatisfecho con este producto. Es defectuoso y no cumple con lo anunciado.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Laura Martínez',
      descripcion: 'No lo recomendaría en absoluto. Tuve problemas desde el primer día y el servicio al cliente fue pésimo.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Pedro Rodríguez',
      descripcion: 'Me siento estafado con la compra de este producto. No cumple con las especificaciones y es de mala calidad.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Ana Fernández',
      descripcion: 'No puedo expresar lo decepcionado que estoy con este producto. No funciona como se anuncia.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'Miguel Torres',
      descripcion: 'No entiendo cómo este producto tiene buenas críticas. Es una completa basura y no lo recomendaría a nadie.',
    },
    {
      valoracion: 1.5,
      nombreUsuario: 'John Doe',
      descripcion: 'Este producto es una completa pérdida de dinero. No cumple con las expectativas y es de baja calidad.',
    },
  ];

  const averageReviews = [
    {
      valoracion: 3.5,
      nombreUsuario: 'John Doe',
      descripcion: 'Este producto es decente. No es malo, pero tampoco es excepcional. Cumple con su propósito.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Jane Smith',
      descripcion: 'Es un producto promedio. No tengo quejas importantes, pero tampoco estoy impresionado.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Juan Pérez',
      descripcion: 'No es el mejor producto que he probado, pero tampoco es el peor. Está bien para su precio.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'María García',
      descripcion: 'Es un producto común. No destacaría en ningún aspecto, pero cumple con lo básico.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Carlos López',
      descripcion: 'No tengo una opinión fuerte sobre este producto. Es aceptable, pero nada especial.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Laura Martínez',
      descripcion: 'Es un producto estándar. No me impresiona ni me decepciona. Cumple con lo esperado.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Pedro Rodríguez',
      descripcion: 'Ni bueno ni malo. Es un producto promedio que no destaca en ningún aspecto en particular.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Ana Fernández',
      descripcion: 'No puedo decir mucho sobre este producto. No es notable en ninguna dirección.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Miguel Torres',
      descripcion: 'Es un producto regular. No me emociona, pero tampoco me decepciona.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Sofía Ramírez',
      descripcion: 'Este producto no es ni bueno ni malo. Está en el punto medio en cuanto a calidad y rendimiento.',
    },
  ];

  const randomReviews = [
    {
      valoracion: 3.0,
      nombreUsuario: 'John Doe',
      descripcion: 'Este producto es interesante. Tiene algunas características únicas, pero tiene sus defectos.',
    },
    {
      valoracion: 4.0,
      nombreUsuario: 'Jane Smith',
      descripcion: 'No esperaba mucho de este producto, pero me sorprendió gratamente. Es una buena opción.',
    },
    {
      valoracion: 2.5,
      nombreUsuario: 'Juan Pérez',
      descripcion: 'No estoy seguro qué pensar de este producto. Tiene sus pros y sus contras.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'María García',
      descripcion: 'Este producto es bastante decente. No es perfecto, pero tampoco es terrible.',
    },
    {
      valoracion: 4.5,
      nombreUsuario: 'Carlos López',
      descripcion: 'Me gusta este producto en general. Cumple con mis necesidades y es fácil de usar.',
    },
    {
      valoracion: 2.0,
      nombreUsuario: 'Laura Martínez',
      descripcion: 'No estoy impresionado con este producto. Tiene más inconvenientes que ventajas.',
    },
    {
      valoracion: 3.0,
      nombreUsuario: 'Pedro Rodríguez',
      descripcion: 'Es difícil formar una opinión sólida sobre este producto. Tiene sus pros y sus contras.',
    },
    {
      valoracion: 4.0,
      nombreUsuario: 'Ana Fernández',
      descripcion: 'Este producto es interesante. Tiene algunas características útiles, aunque no es perfecto.',
    },
    {
      valoracion: 2.5,
      nombreUsuario: 'Miguel Torres',
      descripcion: 'No puedo decidir si me gusta o no este producto. Tiene sus ventajas y desventajas.',
    },
    {
      valoracion: 3.5,
      nombreUsuario: 'Sofía Ramírez',
      descripcion: 'Este producto es impredecible. A veces funciona bien, otras veces no tanto.',
    },
  ];

  const allReviews = [
    ...topReviews,
    ...bottomReviews,
    ...averageReviews,
    ...randomReviews,
  ];

  const [selectedTab, setSelectedTab] = useState('average');
  const [selectedOrder, setSelectedOrder] = useState('average');
  const [sortedReviews, setSortedReviews] = useState([...allReviews]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const reviewsToShow = (() => {
    switch (selectedTab) {
      case 'average':
        return averageReviews;
      case 'top':
        return topReviews;
      case 'bottom':
        return bottomReviews;
      case 'random':
        return randomReviews;
      case 'all':
        return sortedReviews;
      default:
        return sortedReviews;
    }
  })();

  const handleSortClick = (sortOrder) => {
    let sorted;
    if (sortOrder === 'asc') {
      sorted = [...reviewsToShow].sort((a, b) => a.valoracion - b.valoracion);
    } else if (sortOrder === 'desc') {
      sorted = [...reviewsToShow].sort((a, b) => b.valoracion - a.valoracion);
    } else {
      sorted = reviewsToShow;
    }
    setSortedReviews(sorted);
    setSelectedOrder(sortOrder);
  };

  return (
    <div className="reviews-container">
      {allReviews.length !== 0 ? (
        <>
          <div className="tab-buttons">
            <button
              className={`nav-bar-button ${selectedTab === 'average' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('average')}
            >
              Promedio
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'top' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('top')}
            >
              Mejores
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'bottom' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('bottom')}
            >
              Peores
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'random' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('random')}
            >
              Random
            </button>
            <button
              className={`nav-bar-button ${selectedTab === 'all' ? 'activeTab' : ''}`}
              onClick={() => handleTabClick('all')}
            >
              Todos
            </button>
          </div>
          {selectedTab === 'all' ? (
            <div className='sort-buttons'>
              <button
                className={`nav-bar-button ${selectedOrder === 'asc' ? 'activeTab' : ''}`}
                onClick={() => handleSortClick('asc')}
              >
                Ascendente
              </button>
              <button
                className={`nav-bar-button ${selectedOrder === 'desc' ? 'activeTab' : ''}`}
                onClick={() => handleSortClick('desc')}
              >
                Descendente
              </button>
            </div>
          ) : null}
          {reviewsToShow.map((review, index) => (
            <div className='review-container' key={index}>
              <div className='rating-container'>
                <h3>{review.valoracion}</h3>
                <div>{renderStars(review.valoracion)}</div>
              </div>
              <h4>{review.nombreUsuario}</h4>
              <p>{review.descripcion}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="no-reviews">Lo lamentamos, no hay reseñas para este producto aún</div>
      )}
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