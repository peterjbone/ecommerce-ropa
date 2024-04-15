import { useState, useEffect } from "react"
import styles from './FormEdit.module.css'
import { useParams } from "react-router-dom"
import ColorGrid from "../../components/ColorGrid/ColorGrid"
import StockTable from "../../components/StockTable/StockTable"
import axios from "axios"
import { useStore } from '../../store.js';
import { uploadCloudinary } from '../../utils/upload';
import { ToastContainer, toast } from 'react-toastify';
import Opciones from "../../components/Opciones/Opciones.jsx"

const FormEdit = () => {

  const marcas = useStore((state) => state.listaMarcas);
  const genero = useStore((state) => state.listaGeneros);
  const categorias = useStore((state) => state.listaCategorias);
  const subcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);

  const productoDetail = useStore((state) => state.productoDetail);
  const getProductById = useStore((state) => state.getProductById);
  
  const { id } = useParams();
  
  const [opciones, setOpciones] = useState([])

  const [discount, setDiscount] = useState({})
  
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
    opciones: opciones,
    colores: [],
    productoNuevo: false,
    tallas: ''
  })
  
  useEffect(() => {
    (async function loadProductData() {
      try {
        await getProductById(id);
      } catch (error) {
        console.error();
      }
    })();
  }, [id]);
  
  useEffect(() => {
    setForm(prevForm => ({ ...prevForm, ...productoDetail }));
    setDiscount(productoDetail.oferta)
  }, [productoDetail]);
  
  
  // console.log(productoDetail);
  // console.log(productoDetail.oferta && productoDetail.oferta.offActiva);
  // console.log(form);
  
  
  // const changeDiscountHandler = (e) => {
    //   const { checked, name, value } = e.target;
    //   if(name === 'Descuento') {
      //     setDiscount({...discount, Descuento: value})
      //     setForm({...form, oferta: {...discount, Descuento: value}})
      //   } else {
        //     setDiscount({...discount, offActiva: checked});
        //     setForm({...form, oferta: {...discount, offActiva: checked}})
        //   }
        // }

  const changeHandler = (e) => {
    const { name, value } = e.target
    if(name === 'activo' || name === 'productoNuevo') {
      const { checked } = e.target;
      setForm({...form, [name]: checked})
    } else {
      setForm({...form, [name]: value})
    }
  }

 

  //{ codHexadecimal: '#78288C', nombreColor: 'violeta' },

  const submitHandler = async (e) => {
    e.preventDefault()
    // const isValid = validate(form);

    // if(isValid) {

      try {
        axios.put(`http://localhost:3001/updateProduct/${id}`, form)
  
        setDiscount({
          offActiva: false,
          Descuento: 0
        })
        setForm({
          nombre: '',
          marca: '',
          precio: '',
          categoria: '',
          subcategoria: '',
          descripcion: '',
          genero: '',
          oferta: {},
          activo: false,
          opciones: {},
          colores: [],
          productoNuevo: false,
          tallas: {}
        })
        toast.success('Producto creado correctamente')
      } catch (error) {
        console.log(error);
        toast.error('Error al crear el producto')
      }
    // } 
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Nuevo producto</h1>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <div>
          <label className={styles.labelFormContainer}>Nombre: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name='nombre' value={form.nombre} placeholder='Nombre del producto' onChange={changeHandler} />
          {/* {errors.nombre && <span className={styles.spanErrorNotification}>{errors.nombre}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Marca: </label><br></br>
          <select className={styles.inputFormContainer} name="marca" value={form.marca} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {marcas.map(marca => <option key={marca}>{marca}</option>)}
          </select>
          {/* {errors.marca && <span className={styles.spanErrorNotification}>{errors.marca}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Precio: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name='precio' value={form.precio} placeholder='Precio del producto' onChange={changeHandler} />
          {/* {errors.precio && <span className={styles.spanErrorNotification}>{errors.precio}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="categoria" value={form.categoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {categorias.map(categoria => <option key={categoria}>{categoria}</option>)}
          </select>
          {/* {errors.categoria && <span className={styles.spanErrorNotification}>{errors.categoria}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Sub-categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="subcategoria" value={form.subcategoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {subcategorias.map(subcategoria => <option key={subcategoria}>{subcategoria}</option>)}
          </select>
          {/* {errors.subcategoria && <span className={styles.spanErrorNotification}>{errors.subcategoria}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Género: </label><br></br>
          <select className={styles.inputFormContainer} name="genero" value={form.genero} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {genero.map(genero => <option key={genero}>{genero}</option>)}
          </select>
          {/* {errors.genero && <span className={styles.spanErrorNotification}>{errors.genero}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Descripción: </label><br></br>
          <textarea className={styles.inputFormContainer} name="descripcion" value={form.descripcion} id="" cols="30" rows="5" onChange={changeHandler}></textarea>
          {/* {errors.descripcion && <span className={styles.spanErrorNotification}>{errors.descripcion}</span>} */}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Activo: </label>
          <input name='activo' className={styles.inputCheckboxForm} type="checkbox" checked={form.activo} onChange={changeHandler} />
        </div>
        <div>
          <label className={styles.labelFormContainer}>Producto nuevo: </label>
          <input name='productoNuevo' className={styles.inputCheckboxForm} type="checkbox" checked={form.productoNuevo} onChange={changeHandler} />
        </div>
        <div>
          <label className={styles.labelFormContainer}>Oferta: </label>
          <input name='oferta' className={styles.inputCheckboxForm} type="checkbox" checked={productoDetail?.oferta?.offActiva} onChange={'changeDiscountHandler'} />
          {form.oferta.offActiva && (
            <div>
              <label className={styles.labelFormContainer}>% Descuento</label>
              <select className={styles.selectDiscount} name='Descuento' value={discount.Descuento} onChange={'changeDiscountHandler'}>
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

        {/* <ColorGrid nameColors={nameColors} setNameColors={setNameColors} colores={colores} selectedColor={selectedColor} setSelectedColor={setSelectedColor} setForm={setForm}/>
        
        <div>
          <label className={styles.labelFormContainer}>Tipo de talle</label>
          <select name="tipoTalle" value={tipoTalle} onChange={tipoTalleHandler}>
            <option value=''>--Seleccionar--</option>
            <option value='L'>Letras</option>
            <option value='N'>Números</option>
          </select>

          {tipoTalle === 'L' && <StockTable sizes={tallesL} stock={stock} setStock={setStock} setForm={setForm} />}
          {tipoTalle === 'N' && <StockTable sizes={tallesN} stock={stock} setStock={setStock} setForm={setForm} />}
        </div>

        <div>
          <label className={styles.labelFormContainer}>Imágenes: </label>
          <input type="file" multiple={true} onChange={(e) => setImages(e.target.files)} />
        </div>

        <button onClick={buttonStockHandler} type='button'>Agregar stock</button> */}

        {productoDetail && productoDetail.opciones && (
          <Opciones opciones={productoDetail.opciones} setForm={setForm} form={form}/>
        )}

        <button className={styles.submitButton} type='submit'>Actualizar producto</button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default FormEdit
