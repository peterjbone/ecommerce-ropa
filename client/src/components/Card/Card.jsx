import "./Card.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store.js";

export default function Card({ product, isProductsBar, title, productPosition }) {
  const userInfo = useStore((state) => state.userInfo);
  const updateFavorite = useStore((state) => state.updateFavorite);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    userInfo?.favorites.forEach((fav) => {
      if (fav === product._id) {
        setIsFav(true);
      }
    });
  }, [userInfo?.favorites, product._id]);

  const handleFavorite = async (event) => {
    event.preventDefault();
    try {
      setIsFav(!isFav);
      await updateFavorite(product._id);
    } catch (error) {
      console.error(error);
    }
  }

  return isProductsBar ? (
    <div
      key={`${title}/${product._id}`}
      className="product-container"
      style={{
        transition: "300ms ease-in-out",
        transform: `translateX(${productPosition * -205 * 5}px)`
      }}>
      {userInfo &&
        <button className="card-favorite-button" onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </button>
      }
      <div className="product-image-container">
        <Link to={`/${product._id}`}>
          <img
            src={product.opciones[0].imagenes[0]}
            alt={product.opciones[0].imagenes[0]}
            className="image"
          />
        </Link>
      </div>
      <h4>{product.nombre}</h4>
      <p>${product.precio}</p>
    </div>
  ) : (
    <div className="card-container">
      <Link to={`/${product._id}`} key={product._id}>
        {userInfo &&
          <button className="card-favorite-button" onClick={handleFavorite}>
            {isFav ? "❤️" : "🤍"}
          </button>
        }
        <div className="card-image-container">
          <img
            src={product?.opciones[0]?.imagenes[0]}
            alt={`Imagen producto ${product.nombre}`}
          />
        </div>
        <div className="card-info-container">
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
                  style={{
                    backgroundColor: opcion.colores?.codigosHex[0]
                  }}></div>
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
      </Link>
    </div>
  );
}