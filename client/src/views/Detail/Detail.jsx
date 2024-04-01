import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Detail.module.css";

const Detail = ({ products }) => {
	const { id } = useParams();
	const product = products.find((product) => product._id === parseInt(id));
	const [selectedColorIndex, setSelectedColorIndex] = useState(0);
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
	const [relatedProducts, setRelatedProducts] = useState([]);

	if (!product) {
		return (
			<div className={styles.notFound}>
				<h1 className={styles.notFoundError}>ERROR 404</h1>
				<p className={styles.notFoundText}>
					Esta no es la pagina que estas buscando
				</p>
			</div>
		);
	}

	useEffect(() => {
		const filteredRelatedProducts = products.filter(
			(p) => p.id !== product._id
		);
		filteredRelatedProducts.sort(() => Math.random() - 0.5);
		const slicedRelatedProducts = filteredRelatedProducts.slice(0, 3);
		setRelatedProducts(slicedRelatedProducts);
	}, [id, products, product._id]);

	const handleColorChange = (index) => {
		setSelectedColorIndex(index);
		setSelectedSizeIndex(null);
	};

	const handleSizeChange = (index) => {
		setSelectedSizeIndex(index);
	};

	return (
		<div>
			<div className={styles.detailContainer}>
				<div className={styles.carouselContainer}>
					<AliceCarousel
						mouseTracking
						items={product.imagen.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`Imagen ${index + 1}`}
								className={styles.productImage}
							/>
						))}
						autoPlay
						autoPlayInterval={3000}
						infinite
					/>
				</div>
				<div className={styles.containerDatos}>
					<h2 className={styles.productName}>{product.nombre}</h2>
					<p className={styles.description}>
						<strong>Descripción:</strong> {product.descripcion}
					</p>
					<p className={styles.price}>
						<strong>Precio:</strong> ${product.precio}
					</p>

					<div className={styles.buttonsAndDetailsContainer}>
						<div className={styles.detailsContainer}>
							<h3 className={styles.nameColores}>Colores disponibles:</h3>
							<div className={styles.colorsList}>
								{product.opcion.map((opcion, index) => {
									const { codHexadecimal } = opcion.color;
									const isSelected = index === selectedColorIndex;

									return (
										<div
											key={index}
											className={`${styles.colorBox} ${
												isSelected ? styles.selectedColor : ""
											}`}
											style={{ backgroundColor: codHexadecimal }}
											onClick={() => handleColorChange(index)}></div>
									);
								})}
							</div>

							<h3 className={styles.nameTallas}>Tallas disponibles:</h3>
							<div className={styles.sizesList}>
								{product.opcion[selectedColorIndex].talles.map(
									(tallaData, index) => {
										const { talla, stock } = tallaData;
										const isOutOfStock = stock === 0;
										const isSelected = index === selectedSizeIndex;
										return (
											<div
												key={index}
												className={`${styles.sizeBox} ${
													isOutOfStock ? styles.outOfStock : ""
												} ${isSelected ? styles.selectedSize : ""}`}
												onClick={() => handleSizeChange(index)}
												disabled={isOutOfStock}>
												{talla}
												<br />
												(stock: {stock})
											</div>
										);
									}
								)}
							</div>
						</div>
						<div className={styles.buttonsContainer}>
							<button className={styles.addToCartButton}>
								Agregar al carrito
							</button>
							<button className={styles.buyButton}>Comprar</button>
						</div>
					</div>
				</div>
			</div>

			<h2 className={styles.productsRelacionados}>Productos relacionados</h2>
			<div className={styles.relatedProductsContainer}>
				{relatedProducts.map((relatedProduct) => (
					<Link
						to={`/${relatedProduct.id}`}
						key={relatedProduct.id}
						className={styles.relatedProductLink}>
						<div className={styles.relatedProduct}>
							<img
								src={relatedProduct.imagen[0]}
								alt={relatedProduct.nombre}
								className={styles.relatedProductImage}
							/>
							<h3 className={styles.relatedProductName}>
								{relatedProduct.nombre}
							</h3>
							<p className={styles.relatedProductPrice}>
								${relatedProduct.precio}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Detail;
