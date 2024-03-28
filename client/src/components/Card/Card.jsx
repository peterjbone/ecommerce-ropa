import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ product }) {
	return (
		<Link to={`/${product._id}`} key={product._id}>
			<div className="card-container">
				<div className="card-image-container">
					<img
						src={product.imagen[0]}
						alt={`Imagen producto ${product.name}`}
					/>
				</div>
				<div className="card-info-container">
					<p style={{ fontSize: "20px" }}>{product.nombre}</p>
					<p>{product.marca}</p>
					{product?.tallas && (
						<div style={{ display: "flex", flexDirection: "row" }}>
							{product.tallas.map((talla) => (
								<p className="sizes" key={talla}>
									{talla}
								</p>
							))}
						</div>
					)}
					<div style={{ display: "flex", flexDirection: "row" }}>
						{product.opcion.map((opcion, index) => {
							const { codHexadecimal } = opcion.color;
							return (
								<div
									key={index}
									className="colorBox"
									style={{ backgroundColor: codHexadecimal }}></div>
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
			</div>
		</Link>
	);
}
