export default function ProductsBar({products}) {

  return (
    <div className='products-bar-container' >
      {products.map(product => 
        <div key={product.id} >
          <img src={product.imagen[0]} alt={product.imagen[0]} />
          <h4>{product.nombre}</h4>
          <p>{product.tallas}</p>
          <p>{product.colores}</p>
        </div>
        )}
    </div>
  )
}