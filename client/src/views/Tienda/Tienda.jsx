import CardsContainer from "../../components/CardsContainer/CardsContainer"
import products from '../../utils/arrayProductos';

const Tienda = ()=> {
 return (
    <div>
         <CardsContainer products={products} />
    </div>
 )
}

export default Tienda