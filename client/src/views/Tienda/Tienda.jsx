import Pages from "../../components/Pages/Pages";
import { useStore } from '../../store.js';

export default function Tienda() {
  const products = useStore((state) => state.productosFiltrados);
  
  return (
    <div>
      <Pages cardsPerPage='20' cards={products} />
    </div>
  )
}