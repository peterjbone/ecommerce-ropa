import './CategoriesBar.css'

import { useState } from 'react'


export default function CategoriesBar({ title, products }) {

  return (
    <div style={{ display:'flex', flexDirection:'column'}} id='categories' >
      <h3 className='categories-bar-title' >{title}</h3>
        <div className='categories-bar-container' >
          {products.map(product =>
            <div key={product.id} className='category-container' >
              <div className='category-image-container' >
                <img src={product.imagen[0]} alt={product.imagen[0]} className='image' />
              </div>
              <h2>{product.subcategoria}</h2>
            </div>
          )}
        </div>
    </div>
  )
}