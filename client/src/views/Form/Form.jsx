import { useState } from 'react'
import styles from './Form.module.css';

const Form = () => {

  let categorias = [ 'Adulto', 'Infante' ]
  let subcategorias = ['Camisetas y Polos','Chaquetas y Abrigos','Sudaderas y Hoodies','Chalecos','Jeans','Shorts','Short','Zapatillas Casuales','Botin','Botas','Sandalias','Camisas','Pantalones','Botas Cortas','Leggings y Pantalones Deportivos','Zapatos','Blusas y Tops','Faldas','Pantalones de Pijama','Pantalones Formales','Pantalones Cortos de Ciclismo','Zapatillas de Casa','Zapatillas Deportivas','Camisetas de Deporte','Cardigans y Suéteres','Destacado','Tendencia']
  let genero = [ 'masculino', 'unisex', 'femenino']
  let tallesl = ['XS', 'S', 'L', 'M', 'XL', 'XXL', 'XXXL']
  let tallesn = ['4', '6', '8', '10', '12', '14', '16', '34', '36', '38', '39', '40', '41', '42', '43', '44','45']
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
    opciones: '',
    productoNuevo: '',
  })

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
    if(name === 'activo') {
      const { checked } = e.target;
      setForm({...form, [name]: checked})
    } else {
      setForm({...form, [name]: value})
    }
  }


  return (
    <div className={styles.container}>
      <h1>Nuevo producto</h1>
      <form>
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
          <input name='productoNuevo' type="checkbox" />
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

        <button type='submit'>Crear</button>
      </form>
    </div>
  )
}

export default Form
