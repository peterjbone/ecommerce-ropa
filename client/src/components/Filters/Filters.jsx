import './Filters.css'
import { useState } from 'react';
import { useStore } from '../../store';

export default function Filters() {
  const filtros = useStore((state) => state.filtros);
  const setFilters = useStore((state) => state.setFilters);
  const getFilteredProducts = useStore((state) => state.getFilteredProducts);
  const listaMarcas = useStore((state) => state.listaMarcas);
  const listaGeneros = useStore((state) => state.listaGeneros);
  const listaCategorias = useStore((state) => state.listaCategorias);
  const listaSubcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);
  const marcasDisponibles = useStore((state) => state.marcasDisponibles);
  const categoriasDisponibles = useStore((state) => state.categoriasDisponibles);
  const generosDisponibles = useStore((state) => state.generosDisponibles);
  const subcategoriasDisponibles = useStore((state) => state.subcategoriasDisponibles);
  const coloresDisponibles = useStore((state) => state.coloresDisponibles);
  const tallasDisponibles = useStore((state) => state.tallasDisponibles);

  const filters = [
    {
      title: 'Marca',
      completeList: listaMarcas,
      available: marcasDisponibles,
      selected: filtros.marca
    },
    {
      title: 'Genero',
      completeList: listaGeneros,
      available: generosDisponibles,
      selected: filtros.genero
    },
    {
      title: 'Categoria',
      completeList: listaCategorias,
      available: categoriasDisponibles,
      selected: filtros.categoria
    },
    {
      title: 'Subcategoria',
      completeList: listaSubcategorias,
      available: subcategoriasDisponibles,
      selected: filtros.subcategoria
    },
    {
      title: 'Color',
      completeList: listaColores,
      available: coloresDisponibles,
      selected: filtros.color
    },
    {
      title: 'Talla',
      completeList: listaTallas,
      available: tallasDisponibles,
      selected: filtros.talla
    },
  ];

  const orderByavailable = {
    title: 'Order By',
    available: ['Nombre', 'Marca', 'Precio', 'Oferta', 'Genero', 'Categoria', 'Subcategoria'],
    default: 'Nombre'
  };

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
      {filters.map(type => {
        return (
          <div className='filter-list-container' key='filter-list-container' >
            <label htmlFor="">{type.title}</label>
            {type.completeList.map((value) => {
              return (
                <div className='filter-list-button-container' key={value} >
                  <button
                    id={value}
                    name={type.title}
                    className={`filter-list-button ${type.selected?.includes(value) ? 'selected' : type.available?.includes(value) ? 'available' : ''}`}
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