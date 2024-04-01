import { useState, useEffect } from "react"
import styles from './FormEdit.module.css'
import { useParams } from "react-router-dom"
import ColorGrid from "../../components/ColorGrid/ColorGrid"
import StockTable from "../../components/StockTable/StockTable"
import axios from "axios"

const FormEdit = () => {

  let categorias = [ 'Adulto', 'Infante' ]
  let subcategorias = ['Camisetas y Polos','Chaquetas y Abrigos','Sudaderas y Hoodies','Chalecos','Jeans','Shorts','Short','Zapatillas Casuales','Botin','Botas','Sandalias','Camisas','Pantalones','Botas Cortas','Leggings y Pantalones Deportivos','Zapatos','Blusas y Tops','Faldas','Pantalones de Pijama','Pantalones Formales','Pantalones Cortos de Ciclismo','Zapatillas de Casa','Zapatillas Deportivas','Camisetas de Deporte','Cardigans y Suéteres','Destacado','Tendencia']
  let genero = [ 'masculino', 'unisex', 'femenino']
  let tallesL = ['XS', 'S', 'L', 'M', 'XL', 'XXL', 'XXXL']
  let tallesN = ['4', '6', '8', '10', '12', '14', '16', '34', '36', '38', '39', '40', '41', '42', '43', '44','45']
  let marcas = [
    "Nike",
    "Adidas",
    "Gucci",
    "H&M",
    "Zara",
    "Levi's",
    "Calvin Klein",
    "Tommy Hilfiger",
    "Under Armour",
    "Puma",
    "Ralph Lauren",
    "Victoria's Secret",
    "Versace",
    "Prada",
    "Burberry",
    "Chanel",
    "Louis Vuitton",
    "Fendi",
    "Balenciaga",
    "Dior",
    "Armani",
    "Gap",
    "Forever 21",
    "Guess",
    "Diesel",
    "Abercrombie & Fitch",
    "Superdry",
    "American Eagle",
    "The North Face",
    "Columbia",
    "Patagonia",
    "Lululemon",
    "Vans",
    "Converse",
    "New Balance",
    "Reebok"]

  let colores = [
    { codHexadecimal: '#000000', nombreColor: 'negro' },
    { codHexadecimal: '#FFFFFF', nombreColor: 'blanco' },
    { codHexadecimal: '#FF0000', nombreColor: 'rojo' },
    { codHexadecimal: '#0000FF', nombreColor: 'azul' },
    { codHexadecimal: '#808080', nombreColor: 'gris' },
    { codHexadecimal: '#8B4513', nombreColor: 'marron' },
    { codHexadecimal: '#FFFF00', nombreColor: 'amarillo' },
    { codHexadecimal: '#008000', nombreColor: 'verde' },
    { codHexadecimal: '#007FFF', nombreColor: 'francia' },
    { codHexadecimal: '#fa8072', nombreColor: 'salmon' },
    { codHexadecimal: '#FFC0CB', nombreColor: 'rosa' },
    { codHexadecimal: '#78288C', nombreColor: 'violeta' },
  ]

  const { id } = useParams();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductById(id));
  // }, [dispatch, id]);

  // const product = useSelector(state => state.product);

  let product;
  axios(`http://localhost:3001/producto/6601f9026241f448c75032f7`)
    .then((data) => {
      console.log(data.data);
      product = data.data
    })
  console.log(product);

  const [selectedColor, setSelectedColor] = useState([]);

  const [tipoTalle, setTipoTalle] = useState('')
  const tipoTalleHandler = (e) => {
    setForm({...form, tallas: {}})
    setStock({})
    setTipoTalle(e.target.value)
  }

  const [stock, setStock] = useState({});

  const [discount, setDiscount] = useState({
    offActiva: false,
    Descuento: 0
  })

  const [form, setForm] = useState({
    nombre: '',
    marca: '',
    precio: '',
    categoria: '',
    subcategoria: '',
    descripcion: '',
    genero: '',
    oferta: discount,
    activo: false,
    opciones: {},
    colores: selectedColor,
    productoNuevo: false,
    tallas: stock
  })

  let idUser = {
    nombre: 'Campera Nike',
    marca: 'Nike',
    precio: '300',
    categoria: 'Adulto',
    subcategoria: 'Chaquetas y Abrigos',
    descripcion: 'Campera mara Nike',
    genero: 'masculino',
    oferta: { offActiva: true, Descuento: '20' },
    activo: true,
    opciones: {},
    colores: [
      { codHexadecimal: '#FFFFFF', nombreColor: 'blanco' },
      { codHexadecimal: '#FF0000', nombreColor: 'rojo' },
      { codHexadecimal: '#007FFF', nombreColor: 'francia' }
    ],
    productoNuevo: true,
    tallas: { S: '2', L: '4', M: '4', XL: '4', XXL: '3' }
  }

  if(idUser)
  
  console.log(form);
  const changeDiscountHandler = (e) => {
    const { checked, name, value } = e.target;
    if(name === 'Descuento') {
      setDiscount({...discount, Descuento: value})
      setForm({...form, oferta: {...discount, Descuento: value}})
    } else {
      setDiscount({...discount, offActiva: checked});
      setForm({...form, oferta: {...discount, offActiva: checked}})
    }
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    if(name === 'activo' || name === 'productoNuevo') {
      const { checked } = e.target;
      setForm({...form, [name]: checked})
    } else {
      setForm({...form, [name]: value})
    }
  }

  const submitHandler = () => {
    axios.post('http://localhost:3001/createproduct', form)
  }

  return (
    <div className={styles.container}>
      <h1>Editar producto</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nombre: </label>
          <input type="text" name='nombre' value={form.nombre} placeholder='Nombre del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Marca: </label>
          <select name="marca" value={form.marca} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {marcas.map(marca => <option key={marca}>{marca}</option>)}
          </select>
        </div>
        <div>
          <label>Precio: </label>
          <input type="text" name='precio' value={form.precio} placeholder='Precio del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Categoria: </label>
          <select name="categoria" value={form.categoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {categorias.map(categoria => <option key={categoria}>{categoria}</option>)}
          </select>
        </div>
        <div>
          <label>Sub-categoria: </label>
          <select name="subcategoria" value={form.subcategoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {subcategorias.map(subcategoria => <option key={subcategoria}>{subcategoria}</option>)}
          </select>
        </div>
        <div>
          <label>Género: </label>
          <select name="genero" value={form.genero} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {genero.map(genero => <option key={genero}>{genero}</option>)}
          </select>
        </div>
        <div>
          <label>Descripción: </label>
          <textarea name="descripcion" value={form.descripcion} id="" cols="30" rows="10" onChange={changeHandler}></textarea>
        </div>
        <div>
          <label>Activo: </label>
          <input name='activo' type="checkbox" checked={form.activo} onChange={changeHandler} />
        </div>
        <div>
          <label>Producto nuevo: </label>
          <input name='productoNuevo' type="checkbox" checked={form.productoNuevo} onChange={changeHandler} />
        </div>
        <div>
          <label>Oferta: </label>
          <input name='oferta' type="checkbox" checked={form.oferta.offActiva} onChange={changeDiscountHandler} />
          {form.oferta.offActiva && (
            <div>
              <label>% Descuento</label>
              <select name='Descuento' value={discount.Descuento} onChange={changeDiscountHandler}>
                <option value="">%%</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="50">50%</option>
              </select>
            </div>
          )}
        </div>
        <div>
          <label>Opciones: </label>
          <input name='opciones' type="checkbox" />
        </div>

        <ColorGrid colores={colores} selectedColor={selectedColor} setSelectedColor={setSelectedColor} setForm={setForm}/>

        <div>
          <label>Tipo de talle</label>
          <select name="tipoTalle" value={tipoTalle} onChange={tipoTalleHandler}>
            <option value=''>--Seleccionar--</option>
            <option value='L'>Letras</option>
            <option value='N'>Números</option>
          </select>

          {tipoTalle === 'L' && <StockTable sizes={tallesL} stock={stock} setStock={setStock} setForm={setForm} />}
          {tipoTalle === 'N' && <StockTable sizes={tallesN} stock={stock} setStock={setStock} setForm={setForm} />}
        </div>

        <button type='submit'>Crear</button>
      </form>
    </div>
  )
}

export default FormEdit
