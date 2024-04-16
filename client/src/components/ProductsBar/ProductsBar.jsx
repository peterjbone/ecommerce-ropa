import "./ProductsBar.css";

import Card from "../Card/Card";
import nextIcon from "../../assets/icons/next-icon.svg";
import perviousIcon from "../../assets/icons/previous-icon.svg";
import { useState } from "react";

export default function ProductsBar({ title, products }) {
  const [productPosition, setProductPosition] = useState(0);
  
  const showNextImage = () => {
    setProductPosition((index) => {
      if (index === products?.length - 1) return 0;
      return index + 1;
    });
  }
  const showPrevImage = () => {
    setProductPosition((index) => {
      if (index === 0) return products?.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 className="product-bar-title">{title}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}>
        <button
          className="product-arrow-button"
          disabled={productPosition === 0}
          onClick={showPrevImage}>
          <img src={perviousIcon} alt="nextIcon" />
        </button>
        <div className="products-bar-container">
          {products?.map((product) => (
            <Card
              product={product}
              isProductsBar={true}
              title={title}
              productPosition={productPosition}
              key={product._id}
            />
          ))}
        </div>
        <button
          disabled={productPosition + 1 >= products?.length / 5}
          className="product-arrow-button"
          onClick={showNextImage}
          style={{ right: 0 }}>
          <img src={nextIcon} alt="nextIcon" />
        </button>
      </div>
    </div>
  );
}