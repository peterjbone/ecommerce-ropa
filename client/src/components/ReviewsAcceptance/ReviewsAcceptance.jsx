import "./ReviewsAcceptance.css";

import { useState } from "react";
import { useStore } from "../../store";

import ReviewsAcceptanceCard from "../ReviewsAcceptanceCard/ReviewsAcceptanceCard";

export default function ReviewsAcceptance() {
  const resenas = useStore(state => state.resenas);
  const filtrosResenas = useStore(state => state.filtrosResenas);
  const setReviewsFilters = useStore(state => state.setReviewsFilters);
  const getFilteredReviews = useStore(state => state.getFilteredReviews);
  const setReviewsPage = useStore((state) => state.setReviewsPage);
  const pagina = useStore((state) => state.filtrosResenas.pagina);
  const [currentPage, setCurrentPage] = useState(pagina);
  const nPages = Math.ceil(filtrosResenas.cantidadDeResenas / 20);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("notAccepted");
  const [selectedSort, setSelectedSort] = useState("fecha");
  const [selectedOrder, setSelectedOrder] = useState(false);
  const [isRatingFromFocused, setIsRatingFromFocused] = useState(false);
  const [isRatingTillFocused, setIsRatingTillFocused] = useState(false);

  const ratingValues = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

  const handleRatingFromFocus = () => {
    setIsRatingFromFocused(true);
  }
  const handleRatingFromBlur = () => {
    setIsRatingFromFocused(false);
  }
  const handleRatingTillFocus = () => {
    setIsRatingTillFocused(true);
  }
  const handleRatingTillBlur = () => {
    setIsRatingTillFocused(false);
  }
  const previousPage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      try {
        setReviewsPage(currentPage - 1);
        await getFilteredReviews();
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const nextPage = async () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      try {
        setReviewsPage(currentPage + 1);
        await getFilteredReviews();
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const selectPage = async (event) => {
    setCurrentPage(Number(event.target.id));
    try {
      setReviewsPage(Number(event.target.id));
      await getFilteredReviews();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  }
  const handleBooleanOptionChange = async (event) => {
    try {
      const { id } = event.target;
      setReviewsFilters(id, !filtrosResenas[id]);
      await getFilteredReviews();
    } catch (error) {
      console.error(error);
    }
  }
  const handleOptionChange = async (event) => {
    try {
      const { id, value } = event.target;
      setReviewsFilters(id, value);
      await getFilteredReviews();
    } catch (error) {
      console.error(error);
    }
  }
  const handleIsAccepted = async (event) => {
    try {
      const { id } = event.target;
      setSelectedTab(id);
      setReviewsFilters("aceptada", id);
      await getFilteredReviews();
    } catch (error) {
      console.error(error);
    }
  }
  const handleOrderChange = async (event) => {
    try {
      const { id } = event.target;
      setSelectedSort(id);
      setReviewsFilters("ordernado", id);
      await getFilteredReviews();
    } catch (error) {
      console.error(error);
    }
  }
  const handleOrderDirectionChange = async () => {
    try {
      setReviewsFilters("ascendente", !filtrosResenas.ascendente);
      setSelectedOrder(!selectedOrder);
      await getFilteredReviews();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="reviews-acceptance-filters-reviews-container" >
      <div className="reviews-acceptance-filters" >
        <label>Buscar Por</label>
        <div className="review-acceptance-filter-row">
          <button
            id="buscarPor"
            value="usuario"
            className={`reviews-acceptance-button ${filtrosResenas.buscarPor === "usuario" ? "selected-rating" : ""}`}
            onClick={handleOptionChange}
          >
            Usuario
          </button>
          <button
            id="buscarPor"
            value="idProducto"
            className={`reviews-acceptance-button ${filtrosResenas.buscarPor === "idProducto" ? "selected-rating" : ""}`}
            onClick={handleOptionChange}
          >
            Id Producto
          </button>
          {/* <button
            id="buscarPor"
            value="nombreProducto"
            className={`reviews-acceptance-button ${filtrosResenas.buscarPor === "nombreProducto" ? "selected-rating" : ""}`}
            onClick={handleOptionChange}
          >
            Nombre Producto
          </button> */}
        </div>
        <div className="review-acceptance-filter-row">
          <button
            id="busqueda"
            value={search}
            className="reviews-acceptance-search-button"
            onClick={handleOptionChange}>
            🔍
          </button>
          <input
            type="search"
            placeholder="Buscar"
            className="reviews-acceptance-search-bar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="reviews-acceptance-title-button-container" >
          <label
            htmlFor="valoracionDesde" >
            Valoración
          </label>
          <button
            id="valoracionSolo"
            className="reviews-acceptance-button"
            onClick={handleBooleanOptionChange}
          >
            Cambiar A {filtrosResenas.valoracionSolo ? "Entre" : "Solo"}
          </button>
        </div>
        <div className="review-acceptance-filter-row">
          <button
            id="valoracionDesde"
            className="rating-options-button"
            onBlur={() => setTimeout(handleRatingFromBlur, 100)}
            onClick={handleRatingFromFocus}
          >
            {filtrosResenas.valoracionDesde}
          </button>
          <div className={`rating-options-container ${isRatingFromFocused ? "" : "not-visible"}`}>
            {ratingValues.map((rating) => (
              <div className="rating-options-button-container" key={rating}>
                <button
                  key={rating}
                  id="valoracionDesde"
                  value={rating.toFixed(1)}
                  className={`rating-option-button ${rating === Number(filtrosResenas.valoracionDesde) ? "selected-rating" : ""}`}
                  onClick={handleOptionChange}
                >
                  {rating.toFixed(1)}
                </button>
              </div>
            ))}
          </div>
          {!filtrosResenas.valoracionSolo && (
            <>
              <label>-</label>
              <button
                id="valoracionHasta"
                className="rating-options-button"
                onBlur={() => setTimeout(handleRatingTillBlur, 100)}
                onClick={handleRatingTillFocus}
              >
                {filtrosResenas.valoracionHasta}
              </button>
            </>
          )}
          <div className={`rating-options-container right ${isRatingTillFocused ? "" : "invisible"}`}>
            {ratingValues.map((rating) => (
              <div className="rating-options-button-container" key={rating}>
                <button
                  key={rating}
                  id="valoracionHasta"
                  value={rating.toFixed(1)}
                  className={`rating-option-button ${rating === Number(filtrosResenas.valoracionHasta) ? "selected-rating" : ""}`}
                  onClick={handleOptionChange}
                >
                  {rating.toFixed(1)}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="reviews-acceptance-title-button-container" >
          <label htmlFor="dateFrom">
            Fecha
          </label>
          <button
            id="fechaSolo"
            className="reviews-acceptance-button"
            onClick={handleBooleanOptionChange}
          >
            Cambiar A {filtrosResenas.fechaSolo ? "Entre" : "Solo"}
          </button>
        </div>
        <div className="filter-row">
          <input
            type="date"
            id="fechaDesde"
            value={filtrosResenas.fechaDesde}
            onChange={handleOptionChange}
          />
          {!filtrosResenas.fechaSolo && (
            <>
              <label>-</label>
              <input
                type="date"
                id="fechaHasta"
                value={filtrosResenas.fechaHasta}
                onChange={handleOptionChange}
              />
            </>
          )}
        </div>
        <div className="reviews-acceptance-title-button-container" >
          <label htmlFor="dateFrom">
            Fecha Aceptada
          </label>
          <button
            id="fechaAceptadaSolo"
            className="reviews-acceptance-button"
            onClick={handleBooleanOptionChange}
          >
            Cambiar A {filtrosResenas.fechaAceptadaSolo ? "Entre" : "Solo"}
          </button>
        </div>
        <div className="filter-row">
          <input
            type="date"
            id="fechaAceptadaDesde"
            value={filtrosResenas.fechaAceptadaDesde}
            onChange={handleOptionChange}
          />
          {!filtrosResenas.fechaAceptadaSolo && (
            <>
              <label>-</label>
              <input
                type="date"
                id="fechaAceptadaHasta"
                value={filtrosResenas.fechaAceptadaHasta}
                onChange={handleOptionChange}
              />
            </>
          )}
        </div> */}
      </div>
      <div className="reviews-acceptance-select-container" >
        <div className="reviews-acceptance-label-button-container" >
          <label>Selección</label>
          <div className="tab-buttons">
            <button
              id="notAccepted"
              className={`reviews-acceptance-select-button ${selectedTab === "notAccepted" ? "activeSelection" : ""}`}
              onClick={handleIsAccepted}
            >
              Por Aceptar
            </button>
            <button
              id="accepted"
              className={`reviews-acceptance-select-button ${selectedTab === "accepted" ? "activeSelection" : ""}`}
              onClick={handleIsAccepted}
            >
              Aceptadas
            </button>
            <button
              id="all"
              className={`reviews-acceptance-select-button ${selectedTab === "all" ? "activeSelection" : ""}`}
              onClick={handleIsAccepted}
            >
              Todas
            </button>
          </div>
        </div>
        {/*<di v className="reviews-acceptance-label-button-container" >
          <label>Orden</label>
          <div className="sort-buttons">
            <button
              id="fecha"
              className={`reviews-acceptance-select-button ${selectedSort === "fecha" ? "activeSelection" : ""}`}
              onClick={handleOrderChange}
            >
              Fecha
            </button>
            <button
              id="fechaAceptacion"
              className={`reviews-acceptance-select-button ${selectedSort === "fechaAceptacion" ? "activeSelection" : ""}`}
              onClick={handleOrderChange}
            >
              Fecha Aceptación
            </button>
            <button
              id="valoracion"
              className={`reviews-acceptance-select-button ${selectedSort === "valoracion" ? "activeSelection" : ""}`}
              onClick={handleOrderChange}
            >
              Valoración
            </button>
            <button
              id="nombreUsuario"
              className={`reviews-acceptance-select-button ${selectedSort === "nombreUsuario" ? "activeSelection" : ""}`}
              onClick={handleOrderChange}
            >
              Nombre de Usuario
            </button>
            <button
              className={`reviews-acceptance-select-button`}
              onClick={handleOrderDirectionChange}
            >
              {filtrosResenas.ascendente ? "🔼" : "🔽"}
            </button>
          </div>
        </div> */}
      </div>
      <div className="reviews-list">
        {resenas.map(review => (
          <ReviewsAcceptanceCard key={review._id} review={review} />
        ))}
      </div>
      <div className="reviews-acceptance-pages-container" >
        <div className="pages-selector" >
          {(() => {
            return (
              <button
                className={(currentPage === 1 || filtrosResenas.productosPorPagina === 20) ? "invisible" : "page-button"}
                onClick={previousPage} >
                Anterior
              </button>
            );
          })()}
          {Array.from({ length: nPages }, (_, i) => (
            <button
              className={currentPage === i + 1 ? "selected-page" : "page-button"}
              key={i}
              id={i + 1}
              disabled={currentPage === i + 1}
              onClick={selectPage} >
              {i + 1}
            </button>
          ))}
          {(() => {
            const nextClassName = (currentPage === nPages || nPages === 0 || filtrosResenas.productosPorPagina === 20) ? "invisible" : "page-button";
            return (
              <button
                className={nextClassName}
                onClick={nextPage} >
                Siguiente
              </button>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
