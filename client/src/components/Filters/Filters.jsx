import './Filters.css'
import { useState } from 'react';
import { useStore } from '../../store';

export default function Filters() {
  const filtros = useStore((state) => state.filtros);
  const setFilters = useStore((state) => state.setFilters);
  const getFilteredProducts = useStore((state) => state.getFilteredProducts);
  const marcasDisponibles = useStore((state) => state.marcasDisponibles);
  const categoriasDisponibles = useStore((state) => state.categoriasDisponibles);
  const generosDisponibles = useStore((state) => state.generosDisponibles);
  const subcategoriasDisponibles = useStore((state) => state.subcategoriasDisponibles);
  const coloresDisponibles = useStore((state) => state.coloresDisponibles);
  const tallasDisponibles = useStore((state) => state.tallasDisponibles);

  console.log(filtros.marca);

  const disponibles = [
    {
      title: 'Marca',
      available: marcasDisponibles,
      selected: filtros.marca
    },
    {
      title: 'Generos',
      available: generosDisponibles,
      selected: filtros.genero
    },
    {
      title: 'Categoria',
      available: categoriasDisponibles,
      selected: filtros.categoria
    },
    {
      title: 'Subcategoria',
      available: subcategoriasDisponibles,
      selected: filtros.subcategoria
    },
    {
      title: 'Color',
      available: coloresDisponibles,
      selected: filtros.colores
    },
    {
      title: 'Talla',
      available: tallasDisponibles,
      selected: filtros.tallas
    },
  ]

  const orderByavailable = {
    title: 'Order By',
    available: ['Nombre', 'Marca', 'Precio', 'Oferta', 'Genero', 'Categoria', 'Subcategoria'],
    default: 'Nombre'
  }

  const [isOrderFocused, setIsOrderFocused] = useState(false);

  const handleOrderFocus = () => {
    setIsOrderFocused(true);
  }
  const handleOrderBlur = () => {
    setIsOrderFocused(false);
  }
  const handleOptionChange = async (event) => {
    try {
      const { name, id } = event.target;
      setFilters(name, id);
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <div className='filters-container'>
      <label
        tabIndex={0}
        onBlur={() => setTimeout(handleOrderBlur, 100)}
        onClick={handleOrderFocus} >
        {orderByavailable.title}
      </label>
      <div className='order-by-button-container' key='selectedOrder' >
        <button
          className='order-by-button'
          key='selectedOrder'
          id='selectedOrder'
          onBlur={() => setTimeout(handleOrderBlur, 100)}
          onClick={handleOrderFocus} >
          {filtros.ordenadoPor}
        </button>
        <button
          className='order-button'
          id='orderButton'
          onClick={handleOptionChange} >
          {filtros.ascendente ? '🔼' : '🔽'}
        </button>
      </div>
      <div className={`order-by-available-container ${isOrderFocused ? '' : 'invisible'}`} key='order-list-container' >
        {orderByavailable.available.map((order) => {
          const orderByClassname = `order-by-available-button ${order === filtros.ordenadoPor ? 'selected' : ''}`;
          return (
            <div className='order-by-available-button-div' key={order} >
              <button
                key={order}
                id={order}
                className={orderByClassname}
                onClick={handleOptionChange} >
                {order}
              </button>
            </div>
          );
        })}
      </div>
      <div className='number-filters-container' >
        <label
          className='filter-titles'
          htmlFor='precioDesde' >
          Precio
        </label>
        <div className='filter-row'>
          <input
            type='number'
            id='precioDesde'
            placeholder='Desde'
            value={filtros.precioDesde}
            onChange={handleOptionChange} />
          <label>-</label>
          <input
            type='number'
            id='precioHasta'
            placeholder='Hasta'
            value={filtros.precioHasta}
            onChange={handleOptionChange} />
          {/* <button
            id={filteravailable.clearIds[i]}
            onClick={handleFilterChange}
          >
            Clear
          </button> */}
        </div>
      </div>
      {disponibles.map(element => {
        return (
          <div className='filter-list-container' key='filter-list-container' >
            <label htmlFor="">{element.title}</label>
            <div className='filter-list-button-container' key={'filter-list-button-container'} >
              <button
                key='clear'
                className='filter-list-button'
                id='clearTemperaments'
              // onClick={handleFilterChange} 
              >
                Cualquiera
              </button>
            </div>
            {element.available.map((value) => {
              console.log(value);
              return (
                <div className='filter-list-button-container' key={value} >
                  <button
                    id={value}
                    name={element.title}
                    className={`filter-list-button ${element.selected?.includes(value) ? 'selected' : ''}`}
                    value={value}
                    onClick={handleOptionChange} >
                    {value}
                  </button>
                </div>
              );
            })}
          </div>
        )
      })}
    </div>
  )
}