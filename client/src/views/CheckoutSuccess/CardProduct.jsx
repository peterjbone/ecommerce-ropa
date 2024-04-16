function CardProduct({ imagen, nombre, color, talla, cantidad, precio }) {
	//prettier-ignore
	return (
		<div
			style={{
				padding: "0.6rem",
				display: "flex",
				flexDirection: "row",
				gap: "1rem"
			}}>
			<img
				src={imagen}
				alt="imagen"
				width={200}
				height={200}
				style={{ flex: "1" }}
			/>
			<div style={{ textAlign: "start", flex: "1" }}>
				<p
					style={{
						margin: "0 0 0.5rem",
						fontWeight: "600",
						lineHeight: "25px"
					}}>
					{nombre}
				</p>
				<p style={{lineHeight: "30px"}}>Color: {color} </p>
				<p style={{lineHeight: "30px"}}>Talla: {talla} </p>
				<p style={{lineHeight: "30px"}}>Cantidad: {cantidad} </p>
				<p style={{lineHeight: "30px"}}>Precio unitario: ${precio}</p>
			</div>
			<div style={{ textAlign: "center", flex: "1" }}>
				<p>
					<span style={{fontWeight: "600"}}>Precio:</span> ${precio * cantidad}
				</p>
			</div>
		</div>
	);
}

export default CardProduct;
