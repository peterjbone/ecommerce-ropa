import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardsContainer.css";

export default function CardsContainer({ products }) {

  const [paddingTop, setPaddingTop] = useState("");

  useEffect(() => {
    const selectedList = document.querySelector(".selected-list");
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === selectedList) {
          setPaddingTop(entry.target.offsetHeight);
        }
      }
    });
  
    if (selectedList) {
      resizeObserver.observe(selectedList);
    }
  
    return () => {
      if (selectedList) {
        resizeObserver.unobserve(selectedList);
      }
    };
  }, []);

  if (products.length === 0) {
    return (
      <div className="cards-container" style={{ paddingLeft: '20px', paddingTop: `${paddingTop}px`}} >
        Al parecer no hay resultados para esta busqueda, prueba quitando o reseteando filtros
      </div>
    );
  }

	return (
		<div className="cards-container" style={{ paddingTop: `${paddingTop}px`}} >
			{products.map((product) => (
				<Card key={product._id} product={product} />
			))}
		</div>
	);
}
