import { useParams } from 'react-router-dom';
import './Detail.css';
import { useState } from 'react';
import products from '../../utils/arrayProductos.js'

export default function Detail() {
  const { id } = useParams();
  console.log(products);

  return (
    <div>
      <div>
        {/* Imagenes */}
      </div>
      <div>
        {/* Datos */}
      </div>
      <div>
        {/* Opciones De Compra */}
      </div>
    </div>
  )
}