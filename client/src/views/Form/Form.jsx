import { useState } from "react"
import styles from "./Form.module.css";
import ColorGrid from "../../components/ColorGrid/ColorGrid";
import StockTable from "../../components/StockTable/StockTable";
import axios from "axios";
import { uploadCloudinary } from "../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useStore } from "../../store.js";


const Form = () => {

  const marcas = useStore((state) => state.listaMarcas);
  const genero = useStore((state) => state.listaGeneros);
  const categorias = useStore((state) => state.listaCategorias);
  const subcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);

  let tallesL = ["S", "M", "L", "XL", "XLT", "XXL"]
  let tallesN = ["10.0", "10.5", "11.0", "11.5", "12.0", "12.5", "13.0", "13.5", "3.5", "4", "4.0",
  "4.5", "5", "5.0", "5.5", "6", "6.0", "6.5", "7", "7.0", "7.5", "8.0", "8.5", "9.0",
  "9.5"].sort((a, b) => a - b)

  let colores = [
    { codHexadecimal: "#FFFF00", nombreColor: "amarillo" },
    { codHexadecimal: "#0000FF", nombreColor: "azul" },
    { codHexadecimal: "#8ecae6", nombreColor: "azul-marino" },
    { codHexadecimal: "#F5F5DC", nombreColor: "beige" },
    { codHexadecimal: "#FFFFFF", nombreColor: "blanco" },
    { codHexadecimal: "#808080", nombreColor: "gris" },
    { codHexadecimal: "#000000", nombreColor: "negro" },
    { codHexadecimal: "#FF0000", nombreColor: "rojo" },
    { codHexadecimal: "#FFC0CB", nombreColor: "rosa" },
    { codHexadecimal: "#8B4513", nombreColor: "marron" },
    { codHexadecimal: "#008000", nombreColor: "verde" },
    { codHexadecimal: "#007FFF", nombreColor: "francia" },
    { codHexadecimal: "#fa8072", nombreColor: "salmon" },
    { codHexadecimal: "#78288C", nombreColor: "violeta" },
  ]

  const [images, setImages] = useState([])

  const [nameColors, setNameColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  
  const [tipoTalle, setTipoTalle] = useState("")
  const tipoTalleHandler = (e) => {
    setForm({...form, tallas: {}})
    setStock([])
    setTipoTalle(e.target.value)
  }

  const [stock, setStock] = useState([]);

  const [opciones, setOpciones] = useState([])

  const [discount, setDiscount] = useState({
    offActiva: false,
    Descuento: 0
  })

  const [form, setForm] = useState({
    nombre: "",
    marca: "",
    precio: "",
    categoria: "",
    subcategoria: "",
    descripcion: "",
    genero: "",
    oferta: discount,
    activo: false,
    opciones: opciones,
    colores: selectedColor,
    productoNuevo: false,
    tallas: stock
  })

  const [errors, setErrors] = useState({
    nombre: "",
    marca: "",
    precio: "",
    categoria: "",
    subcategoria: "",
    descripcion: "",
    genero: "",
  })

  const validate = (form) => {

    const newErrors = {
      nombre: "",
      marca: "",
      precio: "",
      categoria: "",
      subcategoria: "",
      descripcion: "",
      genero: "",
    };

    let passed = true
    
    if(form.nombre.length <= 10) {
      newErrors.nombre = "El nombre debe tener al menos 10 caracteres";
      passed = false
    }
    if(!form.marca) {
      newErrors.marca = "Debes seleccionar una marca";
      passed = false
    }
    if(!form.precio) {
      newErrors.precio = "Debes ingresar un precio";
      passed = false
    }
    if(!form.categoria) {
      newErrors.categoria = "Debes seleccionar una categoria";
      passed = false
    }
    if(!form.subcategoria) {
      newErrors.subcategoria = "Debes seleccionar una subcategoria";
      passed = false
    }
    if(!form.descripcion) {
      newErrors.descripcion = "Debes ingresar una descripcion";
      passed = false
    }
    if(!form.genero) {
      newErrors.genero = "Debes ingresar un genero";
      passed = false
    }

    setErrors(newErrors);

    return passed;
  }

  
  const changeDiscountHandler = (e) => {
    const { checked, name, value } = e.target;
    if(name === "Descuento") {
      setDiscount({...discount, Descuento: value})
      setForm({...form, oferta: {...discount, Descuento: value}})
    } else {
      setDiscount({...discount, offActiva: checked});
      setForm({...form, oferta: {...discount, offActiva: checked}})
    }
  }

  const changeHandler = (e) => {
    const { name, value } = e.target
    if(name === "activo" || name === "productoNuevo") {
      const { checked } = e.target;
      setForm({...form, [name]: checked})
    } else {
      setForm({...form, [name]: value})
    }
    validate({...form, [name]: value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const isValid = validate(form);

    if(isValid) {

      try {
        let arr = []
        for(let i = 0; i < images.length; i++) {
          const data = await uploadCloudinary(images[i])
          arr.push(data.url)
        }
        axios.post("http://localhost:3001/createproduct", {...form, imagenes: arr})
  
        setSelectedColor([])
        setNameColors([])
        setImages([])
        setTipoTalle("")
        setStock({})
        setDiscount({
          offActiva: false,
          Descuento: 0
        })
        setForm({
          nombre: "",
          marca: "",
          precio: "",
          categoria: "",
          subcategoria: "",
          descripcion: "",
          genero: "",
          oferta: {},
          activo: false,
          opciones: {},
          colores: [],
          productoNuevo: false,
          tallas: {}
        })
        toast.success("Producto creado correctamente")
      } catch (error) {
        console.error(error);
        toast.error("Error al crear el producto")
      }
    } 
  }

  //{ codHexadecimal: "#78288C", nombreColor: "violeta" },

  const buttonStockHandler = async () => {

    let arr = []
    for(let i = 0; i < images.length; i++) {
      const data = await uploadCloudinary(images[i])
      arr.push(data.url)
    }

    setOpciones([
      ...opciones,
      {
        colores: {
          nombres: [selectedColor.nombreColor],
          codigosHex: [selectedColor.codHexadecimal]
        },
        tallas: stock,
        imagenes: arr
      }
    ])
    setForm({...form, opciones: [...opciones, {
      colores: {
        nombres: [selectedColor.nombreColor],
        codigosHex: [selectedColor.codHexadecimal]
      },
      tallas: stock,
      imagenes: arr
    }]})
    setSelectedColor([])
    setStock([])
    setImages([])
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Nuevo producto</h1>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <div>
          <label className={styles.labelFormContainer}>Nombre: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name="nombre" value={form.nombre} placeholder="Nombre del producto" onChange={changeHandler} />
          {errors.nombre && <span className={styles.spanErrorNotification}>{errors.nombre}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Marca: </label><br></br>
          <select className={styles.inputFormContainer} name="marca" value={form.marca} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {marcas.map(marca => <option key={marca}>{marca}</option>)}
          </select>
          {errors.marca && <span className={styles.spanErrorNotification}>{errors.marca}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Precio: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name="precio" value={form.precio} placeholder="Precio del producto" onChange={changeHandler} />
          {errors.precio && <span className={styles.spanErrorNotification}>{errors.precio}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="categoria" value={form.categoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {categorias.map(categoria => <option key={categoria}>{categoria}</option>)}
          </select>
          {errors.categoria && <span className={styles.spanErrorNotification}>{errors.categoria}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Sub-categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="subcategoria" value={form.subcategoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {subcategorias.map(subcategoria => <option key={subcategoria}>{subcategoria}</option>)}
          </select>
          {errors.subcategoria && <span className={styles.spanErrorNotification}>{errors.subcategoria}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Género: </label><br></br>
          <select className={styles.inputFormContainer} name="genero" value={form.genero} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {genero.map(genero => <option key={genero}>{genero}</option>)}
          </select>
          {errors.genero && <span className={styles.spanErrorNotification}>{errors.genero}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Descripción: </label><br></br>
          <textarea className={styles.inputFormContainer} name="descripcion" value={form.descripcion} id="" cols="30" rows="5" onChange={changeHandler}></textarea>
          {errors.descripcion && <span className={styles.spanErrorNotification}>{errors.descripcion}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Activo: </label>
          <input name="activo" className={styles.inputCheckboxForm} type="checkbox" checked={form.activo} onChange={changeHandler} />
        </div>
        <div>
          <label className={styles.labelFormContainer}>Producto nuevo: </label>
          <input name="productoNuevo" className={styles.inputCheckboxForm} type="checkbox" checked={form.productoNuevo} onChange={changeHandler} />
        </div>
        <div>
          <label className={styles.labelFormContainer}>Oferta: </label>
          <input name="oferta" className={styles.inputCheckboxForm} type="checkbox" checked={form.oferta.offActiva} onChange={changeDiscountHandler} />
          {form.oferta.offActiva && (
            <div>
              <label className={styles.labelFormContainer}>% Descuento</label>
              <select className={styles.selectDiscount} name="Descuento" value={discount.Descuento} onChange={changeDiscountHandler}>
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

        <ColorGrid nameColors={nameColors} setNameColors={setNameColors} colores={colores} selectedColor={selectedColor} setSelectedColor={setSelectedColor} setForm={setForm}/>
        
        <div>
          <label className={styles.labelFormContainer}>Tipo de talle</label>
          <select name="tipoTalle" value={tipoTalle} onChange={tipoTalleHandler}>
            <option value="">--Seleccionar--</option>
            <option value="L">Letras</option>
            <option value="N">Números</option>
          </select>

          {tipoTalle === "L" && <StockTable sizes={tallesL} stock={stock} setStock={setStock} setForm={setForm} />}
          {tipoTalle === "N" && <StockTable sizes={tallesN} stock={stock} setStock={setStock} setForm={setForm} />}
        </div>

        <div>
          <label className={styles.labelFormContainer}>Imágenes: </label>
          <input type="file" multiple={true} onChange={(e) => setImages(e.target.files)} />
        </div>

        <button onClick={buttonStockHandler} type="button">Agregar stock</button>

        <button className={styles.submitButton} type="submit">Crear</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Form
