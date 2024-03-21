import { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({
    nombre: '',
    marca: '',
    precio: '',
    categoria: '',
    subcategoria: '',
    descripcion: '',
    genero: '',
    oferta: '',
    activo: false,
    opciones: '',
    productoNuevo: '',
  })

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
    <div>
      <h1>Nuevo producto</h1>
      <form>
        <div>
          <label>Nombre: </label>
          <input type="text" name='nombre' value={form.nombre} placeholder='Nombre del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Marca: </label>
          <input type="text" name='marca' value={form.marca} placeholder='Marca del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Precio: </label>
          <input type="text" name='precio' value={form.precio} placeholder='Precio del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Categoria: </label>
          <input type="text" name='categoria' value={form.categoria} placeholder='Categoria del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Sub-categoria: </label>
          <input type="text" name='subcategoria' value={form.subcategoria} placeholder='Sub-categoria del producto' onChange={changeHandler} />
        </div>
        <div>
          <label>Género: </label>
          <input type="text" name='genero' value={form.genero} placeholder='Género del producto' onChange={changeHandler} />
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
          <input name='oferta' type="checkbox" checked={form.oferta} />
          {form.oferta && (
            <div>
              <label>% Descuento</label>
              <select name='Descuento'>
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
