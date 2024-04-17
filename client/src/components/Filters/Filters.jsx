import "./Filters.css"
import { useState } from "react";
import { useStore } from "../../store";

export default function Filters() {
  const filtros = useStore((state) => state.filtros);
  const setOrder = useStore((state) => state.setOrder);
  const setOrderDirection = useStore((state) => state.setOrderDirection);
  const setPrices = useStore((state) => state.setPrices);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilter = useStore((state) => state.resetFilter);
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
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTill, setPriceTill] = useState("");

  const filters = [
    {
      title: "marca",
      completeList: listaMarcas,
      available: marcasDisponibles,
      selected: filtros.marca
    },
    {
      title: "genero",
      completeList: listaGeneros,
      available: generosDisponibles,
      selected: filtros.genero
    },
    {
      title: "categoria",
      completeList: listaCategorias,
      available: categoriasDisponibles,
      selected: filtros.categoria
    },
    {
      title: "subcategoria",
      completeList: listaSubcategorias,
      available: subcategoriasDisponibles,
      selected: filtros.subcategoria
    },
    {
      title: "color",
      completeList: listaColores,
      available: coloresDisponibles,
      selected: filtros.color
    },
    {
      title: "talla",
      completeList: listaTallas,
      available: tallasDisponibles,
      selected: filtros.talla
    },
  ];

  const orderByOptions = {
    title: "Ordenar Por",
    options: ["nombre", "marca", "precio", "oferta", "genero", "categoria", "subcategoria"],
    default: "nombre"
  };

  const [isOrderFocused, setIsOrderFocused] = useState(false);

  const handleOrderFocus = () => {
    setIsOrderFocused(true);
  }
  const handleOrderBlur = () => {
    setIsOrderFocused(false);
  }
  const handleOrderChange = async (event) => {
    try {
      setOrder(event.target.id);
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }
  }
  const handleOrderDirectionChange = async () => {
    try {
      setOrderDirection();
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }
  }
  const handlePricesSubmit = async () => {
    try {
      setPrices(priceFrom, priceTill);
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }
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
  const handleAnyOptionChange = async (event) => {
    try {
      const { id } = event.target;
      resetFilter(id);
      await getFilteredProducts();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="filters-container">
        <label
          tabIndex={0}
          onBlur={() => setTimeout(handleOrderBlur, 100)}
          onClick={handleOrderFocus} >
          {orderByOptions.title}
        </label>
        <div className="order-by-button-container" key="selectedOrder" >
          <button
            className="order-by-button"
            key="selectedOrder"
            id="selectedOrder"
            onBlur={() => setTimeout(handleOrderBlur, 100)}
            onClick={handleOrderFocus} >
            {filtros.ordenado}
          </button>
          <button
            className="order-direction-button"
            id="orderButton"
            onClick={handleOrderDirectionChange} >
            {filtros.ascendente ? "🔼" : "🔽"}
          </button>
        </div>
        <div className={`order-by-options-container ${isOrderFocused ? "" : "invisible"}`} >
          {orderByOptions.options?.map((order, index) => {
            return (
              <div className="order-by-options-button-div" key={order} >
                <button
                  key={order}
                  id={order}
                  name="ordenado"
                  style={{ zIndex: index }}
                  className={`order-by-options-button ${order === filtros.ordenado ? "selected-order" : ""}`}
                  onClick={handleOrderChange} >
                  {order}
                </button>
              </div>
            );
          })}
        </div>
        <div className="number-filters-container" >
          <label
            className="filter-titles"
            htmlFor="precioDesde" >
            Precio
          </label>
          <div className="filter-row">
            <input
              type="number"
              id="precioDesde"
              placeholder="Desde"
              value={priceFrom}
              onChange={(event) => { event.target.value >= 0 ? setPriceFrom(event.target.value) : null }}
            />
            <label>-</label>
            <input
              type="number"
              id="precioHasta"
              placeholder="Hasta"
              value={priceTill}
              onChange={(event) => { event.target.value >= 0 ? setPriceTill(event.target.value) : null }}
            />
            <button
              className="submit-prices-button"
              onClick={handlePricesSubmit}
            >
              ▶️
            </button>
          </div>
        </div>
        {filters?.map((type, index) => {
          return (
            <div className="filter-list-container" key={`${type.title} ${index}`} >
              <label className="filter-titles" >{type.title}</label>
              <div className="filter-list-button-container">
                    <button
                      id={type.title}
                      style={{zIndex: 0 }}
                      className={`filter-list-button ${type.selected.length !== 0 ? "available" : ""}`}
                      onClick={handleAnyOptionChange} >
                      Cualquiera
                    </button>
                  </div>
              {type.completeList?.map((value, index) => {
                return (
                  <div className="filter-list-button-container" key={value} >
                    <button
                      id={value}
                      name={type.title}
                      style={{ zIndex: index + 1 }}
                      className={`filter-list-button ${type.selected?.includes(value) ? "selected" : type.available?.includes(value) ? "available" : ""}`}
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
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  )
}