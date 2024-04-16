import styles from "./CheckoutSuccess.module.css";
import axios from "axios";
import { useStore } from "../../store.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CardProduct from "./CardProduct.jsx";

const CheckoutSuccess = () => {
	//? Obteniendo la ultima compra del usuario
	const userInfo = useStore((state) => state.userInfo);

	const getUserLastPurchase = useStore((state) => state.getUserLastPurchase);
	useEffect(() => {
		getUserLastPurchase(userInfo._id);
	}, [getUserLastPurchase, userInfo._id]);

	const purchase = useStore((state) => state.userLastPurchase);
	console.log(purchase);

	const products = purchase.lastPurchase.products;

	//prettier-ignore
	return (
		<div className={styles.checkoutContainer}>
			<img
				src="https://i.postimg.cc/g0kPCrGn/check.png"
				alt="check"
				width={100}
			/>
			<h2>Pago exitoso</h2>
			<h3>Te agradecemos por tu compra 🤝</h3>
			<p>
				El correo de confirmación de tu compra con los detalles ha sido enviado
				a tu Email
			</p>
			<div className={styles.order}>
				El # de tu pedido es: {purchase.lastPurchase._id}
			</div>
			<p>Fecha y hora de la compra: {purchase.lastPurchase.purchase_time}</p>
			<div className={styles.table}>
				{/* Encabezados */}
				<div className={styles.row1}>
					<div style={{ width: "20%", minWidth: "250px" }}>
						<svg
							style={{ position: "relative", top: "4px" }}
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							fill="#008000"
							class="bi bi-house-door-fill"
							viewBox="0 0 16 16">
							<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
						</svg>
						<span
							style={{
								display: "inline-block",
								marginLeft: "0.5rem",
								fontSize: "1rem"
							}}>
							Detalles de envío
						</span>
					</div>
					<div>
						<svg
							style={{ position: "relative", top: "4px" }}
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							fill="#008000"
							class="bi bi-bag-check-fill"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
							/>
						</svg>
						<span
							style={{
								display: "inline-block",
								marginLeft: "0.5rem",
								fontSize: "1rem"
							}}>
							Resumen de compra
						</span>
					</div>
				</div>
				{/* Informacion */}
				<div className={styles.row2}>
					<div
						style={{
							padding: "0.3rem 0.8rem",
							width: "20%",
							minWidth: "250px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "start",
							alignContent: "center",
							gap: "1rem"
						}}>
						<div>
							<p
								style={{
									margin: "0.5rem 0 0",
									fontWeight: "600",
									lineHeight: "30px"
								}}>
								Dirección
							</p>
							<p style={{ lineHeight: "25px" }}>
								{purchase.lastPurchase.shipping.address.line1} <br />
								{purchase.lastPurchase.shipping.address.line2} <br />
								Código postal{" "}
								{purchase.lastPurchase.shipping.address.postal_code}
								<br />
								{purchase.lastPurchase.shipping.address.city},{" "}
								{purchase.lastPurchase.shipping.address.country} <br />
							</p>
						</div>
						<div>
							<p style={{ fontWeight: "600", lineHeight: "25px" }}>
								Estado de entrega
							</p>
							<p>Pendiente</p>
						</div>
						<div>
							<p style={{ fontWeight: "600", lineHeight: "25px" }}>
								Estado de pago
              </p>
              <p>Pagado</p>
						</div>
						<div>
							<p style={{ fontWeight: "600", lineHeight: "25px" }}>
								Persona a entregar
              </p>
              <p>{purchase.lastPurchase.shipping.name}</p>
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						{products.map((item) => (
							<CardProduct
								nombre={item.productId.nombre}
								color={item.color}
								talla={item.talla}
								cantidad={item.quantity}
								precio={item.productId.precio}
								imagen={item.productId.opciones[0].imagenes[0]}
							/>
						))}
						<div
							style={{
								padding: "0.6rem",
								borderTop: "3px solid #333",
								display: "flex",
								justifyContent: "end"
							}}>
							<div>
								<p>Subtotal: ${purchase.lastPurchase.subtotal / 100}</p>
								<p>Envío: ${purchase.lastPurchase.amount_shipping}</p>
								<p>Descuento: -$0</p>
								<p style={{ fontWeight: "700", fontSize: "1.5rem" }}>
									Total: ${purchase.lastPurchase.total / 100}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Volver a comprar */}
			<Link to={"/tienda"}>
				<button className={styles.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						fill="#fff"
						class="bi bi-arrow-left-short"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
						/>
					</svg>
					<p style={{ color: "#fff", position: "relative", top: "5px" }}>
						Seguir comprando
					</p>
				</button>
			</Link>
		</div>
	);
};

export default CheckoutSuccess;
