import './CategoriesBar.css'

import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store.js';

export default function CategoriesBar({ title, categories }) {
  const navigate = useNavigate();
  const getSubcategoria = useStore((state) => state.getSubcategoria);

  const handleSubcategorySearch = async (event) => {
    try {
      await getSubcategoria(event.target.id);
      navigate('/tienda');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ display:'flex', flexDirection:'column'}} id='categories' >
      <h3 className='categories-bar-title' >{title}</h3>
        <div className='categories-bar-container' >
          {categories.map(category =>
            <div key={category} className='category-container'>
              <div className='category-image-container' >
                <img 
                className='image'  
                src={category} 
                alt={category} 
                id={category} 
                onClick={handleSubcategorySearch} />
              </div>
              <h2>{category}</h2>
            </div>
          )}
          {/* {categories.map(category =>
            <div key={category.id} className='category-container'>
              <div className='category-image-container' >
                <img 
                className='image'  
                src={category.imagen[0]} 
                alt={category.imagen[0]} 
                id={category.subcategoria} 
                onClick={handleSubcategorySearch} />
              </div>
              <h2>{category.subcategoria}</h2>
            </div>
          )} */}
        </div>
    </div>
  )
}