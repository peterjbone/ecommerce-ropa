import styles from "./Detail.module.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useStore } from "../../store";
import HeroImagesBarDetail from "../../components/HeroImagesBar/HeroImagesBarDetail";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import Reviews from "../../components/Reviews/Reviews";

export default function Detail() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [selectedColorIndex, setSelectedColorIndex] = useState(0);
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const productoDetail = useStore((state) => state.productoDetail);
	const productoReviews = useStore((state) => state.productoReviews);
	const getProductById = useStore((state) => state.getProductById);
	const addToCart = useStore((state) => state.addToCart);
	const getCart = useStore((state) => state.getCart);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const cart = useStore((state) => state.cart);
	const cartToken = localStorage.getItem("cartToken");
	// console.log(cartToken)

	useEffect(() => {
		const cartToken = localStorage.getItem("cartToken");
		if (cartToken) {
			getCart(cartToken);
		}
	}, []);

	useEffect(() => {
		(async function getProduct() {
			try {
				await getProductById(id);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [id]);

	useEffect(() => {
		const fetchRelatedProducts = async () => {
			try {
				if (productoDetail && productoDetail.categoria) {
					const response = await axios.post("http://localhost:3001/productos", {
						categoria: [productoDetail.categoria],
						busqueda: ""
					});
					const filteredProducts = response.data.filteredProducts;
					const randomProducts = getRandomItems(filteredProducts, 9, id);
					setRelatedProducts(randomProducts);
				}
			} catch (error) {
				console.error("Error al obtener productos relacionados:", error);
			}
		};
		fetchRelatedProducts();
	}, [id, productoDetail]);

	const handleColorChange = (index) => {
		setSelectedColorIndex(index);
		setSelectedSizeIndex(null);
		setIsButtonDisabled(true);
	};

	const handleSizeChange = (index) => {
		setSelectedSizeIndex(index);
		setIsButtonDisabled(false);
	};

	const handleAddToCart = () => {
		if (selectedSizeIndex !== null && selectedColorIndex !== null) {
			const selectedColor =
				productoDetail.opciones[selectedColorIndex].colores.nombres[0];
			const selectedSize =
				productoDetail.opciones[selectedColorIndex].tallas[selectedSizeIndex];

			if (selectedSize.stock > 0) {
				const selectedProduct = {
					id: productoDetail._id,
					nombre: productoDetail.nombre,
					descripcion: productoDetail.descripcion,
					marca: productoDetail.marca,
					categoria: productoDetail.categoria,
					genero: productoDetail.genero,
					subcategoria: productoDetail.subcategoria,
					precio: productoDetail.precio,
					imagen: productoDetail.opciones[selectedColorIndex].imagenes[0],
					opcion: {
						color: selectedColor,
						talla: selectedSize.talla,
						stock: selectedSize.stock
					},
					quantity: 1
				};
				addToCart(selectedProduct, cartToken);
			} else {
				console.log("Esta talla está agotada");
			}
		} else {
			console.log("Por favor selecciona color y talla");
		}
	};

	const getRandomItems = (array, count, currentProductId) => {
		const shuffled = array
			.filter((product) => product._id !== currentProductId)
			.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const editHandler = () => {
		navigate(`/editproduct/${id}`);
	};

	if (!productoDetail) {
		return (
			<div className={styles.notFound}>
				<h1 className={styles.notFoundError}>ERROR 404</h1>
				<p className={styles.notFoundText}>
					Esta no es la página que estás buscando
				</p>
			</div>
		);
	} else {
		return (
			<div className={styles.detailContainer}>
				{productoDetail && (
					<div className={styles.imagen}>
						<HeroImagesBarDetail
							product={productoDetail}
							selectedColorIndex={selectedColorIndex}
						/>
					</div>
				)}
				<div className={styles.containerDatos}>
					<h2 className={styles.productName}>
						{productoDetail && productoDetail.nombre}
					</h2>
					<p>
						<strong>Descripción:</strong>{" "}
						{productoDetail && productoDetail.descripcion}
					</p>
					<p>
						<strong>Marca:</strong> {productoDetail && productoDetail.marca}
					</p>
					<p>
						<strong>Género:</strong> {productoDetail && productoDetail.genero}
					</p>
					<p>
						<strong>Categoria:</strong>
						{productoDetail && productoDetail.categoria}
					</p>
					<p>
						<strong>SubCategoria:</strong>{" "}
						{productoDetail && productoDetail.subcategoria}
					</p>
					<p>
						<strong>Precio:</strong> ${productoDetail && productoDetail.precio}
					</p>
					{productoDetail && productoDetail.oferta && (
						<p>
							<strong>Oferta: </strong> {productoDetail.oferta.Descuento}% de
							descuento
						</p>
					)}
					<div>
						<h3>Opciones:</h3>
						{productoDetail &&
							productoDetail.opciones &&
							productoDetail.opciones.map((opcion, index) => (
								<div key={index}>
									<p>Color:</p>
									<div className={styles.colorsList}>
										{opcion.colores.codigosHex.map((color, colorIndex) => (
											<div
												key={colorIndex}
												className={`${styles.colorCircle} ${
													selectedColorIndex === index
														? styles.selectedColor
														: ""
												}`}
												style={{ backgroundColor: color }}
												onClick={() => handleColorChange(index)}></div>
										))}
									</div>
									{selectedColorIndex === index && (
										<div className={styles.sizeOptions}>
											<p>Tallas disponibles:</p>
											<div className={styles.sizeList}>
												{opcion.tallas.map((tallaData, sizeIndex) => (
													<div
														key={sizeIndex}
														className={`${styles.sizeItem} ${
															selectedSizeIndex === sizeIndex
																? styles.selectedSize
																: ""
														}`}
														onClick={() => handleSizeChange(sizeIndex)}>
														{tallaData.talla} (Stock: {tallaData.stock})
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							))}
					</div>
					<div className={styles.buttonsContainer}>
						<button
							className={styles.addToCartButton}
							onClick={handleAddToCart}
							disabled={isButtonDisabled}>
							Agregar al carrito
						</button>
						{cart.length === 0 && (
							<button className={styles.buyButton} disabled={isButtonDisabled}>
								Comprar
							</button>
						)}
						<button
							className={styles.buyButton}
							onClick={editHandler}
							disabled={isButtonDisabled}>
							Editar producto
						</button>
					</div>
				</div>
				<div className={styles.productosRelacionados}>
					<ProductsBar
						title="Productos Relacionados"
						products={relatedProducts}
					/>
				</div>
				<Reviews reviews={productoReviews} />
			</div>
		);
	}
}
