import "./ProductsBar.css";

import { useState } from "react";
import Card from "../Card/Card";

export default function ProductsBar({ title, products }) {
	const [productPosition, setProductPosition] = useState(0);

	function showNextImage() {
		setProductPosition((index) => {
			if (index === products?.length - 1) return 0;
			return index + 1;
		});
		// console.log(productPosition, products.length / 5);
	}

	function showPrevImage() {
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
					width: "80%",
					margin: "auto",
					alignItems: "center",
					position: "relative"
				}}>
				<button
					className="product-arrow-button"
					disabled={productPosition === 0}
					onClick={showPrevImage}>
					⬅️
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
					➡️
				</button>
			</div>
		</div>
	);
}
