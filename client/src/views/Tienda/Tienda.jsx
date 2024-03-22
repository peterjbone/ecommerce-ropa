import Pages from "../../components/Pages/Pages";
import { useStore } from '../../store.js';

export default function Tienda() {
  const products = useStore((state) => state.productosFiltrados);
  console.log(products);
  
  return (
    <div>
      <Pages cardsPerPage='20' cards={products} />
    </div>
  )
}