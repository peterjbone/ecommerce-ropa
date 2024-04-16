import "./FavoriteCard.css";

import { Link } from "react-router-dom";
import { useStore } from "../../store";

export default function FavoriteCard({ product }) {
  const updateFavorite = useStore((state) => state.updateFavorite);
  const getFavorites = useStore((state) => state.getFavorites);

  const handleFavorite = async (event) => {
    event.preventDefault();
    try {
      await updateFavorite(product._id);
      await getFavorites();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Link to={`/${product._id}`} key={product._id}>
        <div className="user-card-container">
          <div className="user-card-image-container">
            <img
              src={product?.opciones[0]?.imagenes[0]}
              alt={`Imagen producto ${product.nombre}`}
            />
          </div>
          <div className="user-card-info-container">
            <p style={{ fontSize: "20px" }}>{product.nombre}</p>
            <p>{product.marca}</p>
            {product?.opciones[0].tallas && (
              <div style={{ display: "flex", flexDirection: "row" }}>
                {product.opciones[0].tallas.map((talla, index) => (
                  <p className="sizes" key={`${talla.stock} ${index}`}>
                    {talla.talla}
                  </p>
                ))}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {product.opciones.map((opcion, index) => {
                return (
                  <div
                    key={`${opcion.colores?.codigosHex[0]} ${index}`}
                    className="colorBox"
                    style={{ backgroundColor: opcion.colores?.codigosHex[0] }}></div>
                );
              })}
            </div>
            <p style={{ fontSize: "20px" }}>
              ${" "}
              {product.precio.toLocaleString("sp-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </p>
          </div>
          <button
            className="nav-bar-button user-card-rating-button"
            onClick={handleFavorite}
          >
            Quitar Favorito
          </button>
        </div>
      </Link>
    </>
  );
}