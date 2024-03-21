import { NavLink } from 'react-router-dom'
import './CategoriesBar.css'

import { useState } from 'react'


export default function CategoriesBar({ title, categories }) {

  return (
    <div style={{ display:'flex', flexDirection:'column'}} id='categories' >
      <h3 className='categories-bar-title' >{title}</h3>
        <div className='categories-bar-container' >
          {categories.map(category =>
            <div key={category.id} className='category-container' >
              <NavLink to={`/compras?subcategoria:${category.subcategoria}`} >
              <div className='category-image-container' >
                <img src={category.imagen[0]} alt={category.imagen[0]} className='image' />
              </div>
              <h2>{category.subcategoria}</h2>
            </NavLink>
            </div>
          )}
        </div>
    </div>
  )
}