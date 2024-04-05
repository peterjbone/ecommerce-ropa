import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardsContainer.css";

export default function CardsContainer({ products }) {

  const [paddingTop, setPaddingTop] = useState('');

  useEffect(() => {
    const selectedList = document.querySelector('.selected-list');
    
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

	return (
		<div className="cards-container" style={{ paddingTop: `${paddingTop}px`}} >
			{products.map((product) => (
				<Card key={product._id} product={product} />
			))}
		</div>
	);
}
