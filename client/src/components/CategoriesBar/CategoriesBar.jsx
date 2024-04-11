import "./CategoriesBar.css";

import { useNavigate } from "react-router-dom";
import { useStore } from "../../store.js";

export default function CategoriesBar({ title, name, categories, products }) {
	const navigate = useNavigate();
	const resetFilters = useStore((state) => state.resetFilters);
	const setFilters = useStore((state) => state.setFilters);
	const getFilteredProducts = useStore((state) => state.getFilteredProducts);

	const handleCategorySearch = async (event) => {
		try {
			const { name, id } = event.target;
			resetFilters();
			setFilters(name, id);
			await getFilteredProducts();
			navigate("/tienda");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }} id="categories">
			<h3 className="categories-bar-title">{title}</h3>
			<div className="categories-bar-container">
				{categories.map((category) => (
					<div key={category} className="category-container">
						<div className="category-image-container">
							{/* <img
                className='image'
                src={name === 'color' 
                ? products.find(product => product.opciones[0]['colores'].nombres[0] === category)?.opciones[0]?.imagenes[0] 
                : products.find(product => product[name] === category)?.opciones[0]?.imagenes[0]}
                alt={category}
                id={category}
                name={name}
                onClick={handleCategorySearch} /> */}
						</div>
						<h2>{category}</h2>
					</div>
				))}
			</div>
		</div>
	);
}
