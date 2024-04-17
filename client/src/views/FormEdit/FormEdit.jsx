import { useState, useEffect } from "react";
import styles from "./FormEdit.module.css";
import { useParams } from "react-router-dom";
import ColorGrid from "../../components/ColorGrid/ColorGrid";
import StockTable from "../../components/StockTable/StockTable";
import axios from "axios";
import { useStore } from "../../store.js";
import { uploadCloudinary } from "../../utils/upload";
import { ToastContainer, toast } from "react-toastify";
import Opciones from "../../components/Opciones/Opciones.jsx";
const { VITE_BACK_URL } = import.meta.env;


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
  
  const [tipoTalle, setTipoTalle] = useState("");
  const tipoTalleHandler = (e) => {
    setForm({...form, tallas: {}})
    setStock({})
    setTipoTalle(e.target.value)
  }

	const [stock, setStock] = useState({});

  const [discount, setDiscount] = useState({
    offActiva: false,
    Descuento: 0
  });

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
    colores: [],
    productoNuevo: false,
    tallas: ""
  });
  
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
    setErrors(validate({...form, [name]: value}))
  }

 

  //{ codHexadecimal: "#78288C", nombreColor: "violeta" },

  const [errors, setErrors] = useState({})

  const validate = (form) => {

    const newErrors = {
      nombre: "",
      marca: "",
      precio: "",
      categoria: "",
      subcategoria: "",
      descripcion: "",
      genero: "",
      opciones
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

  const submitHandler = async (e) => {
    e.preventDefault()
    const isValid = validate(form);

    if(isValid) {

      try {
        axios.put(`${VITE_BACK_URL}/updateProduct/${id}`, form);
  
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
        toast.success("Producto actualizado", {
					autoClose: 500
				})
      } catch (error) {
        console.log(error);
        toast.error("Error al actualizar producto")
      }
    } 
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Nuevo producto</h1>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <div>
          <label className={styles.labelFormContainer}>Nombre: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name="nombre" value={form.nombre} placeholder="Nombre del producto" onChange={changeHandler} /><br></br>
          {errors.nombre && <span className={styles.spanErrorNotification}>{errors.nombre}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Marca: </label><br></br>
          <select className={styles.inputFormContainer} name="marca" value={form.marca} onChange={changeHandler}><br></br>
            <option value="">--Seleccionar--</option>
            {marcas.map(marca => <option key={marca}>{marca}</option>)}
          </select><br></br>
          {errors.marca && <span className={styles.spanErrorNotification}>{errors.marca}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Precio: </label><br></br>
          <input className={styles.inputFormContainer} type="text" name="precio" value={form.precio} placeholder="Precio del producto" onChange={changeHandler} /><br></br>
          {errors.precio && <span className={styles.spanErrorNotification}>{errors.precio}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="categoria" value={form.categoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {categorias.map(categoria => <option key={categoria}>{categoria}</option>)}
          </select><br></br>
          {errors.categoria && <span className={styles.spanErrorNotification}>{errors.categoria}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Sub-categoria: </label><br></br>
          <select className={styles.inputFormContainer} name="subcategoria" value={form.subcategoria} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {subcategorias.map(subcategoria => <option key={subcategoria}>{subcategoria}</option>)}
          </select><br></br>
          {errors.subcategoria && <span className={styles.spanErrorNotification}>{errors.subcategoria}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Género: </label><br></br>
          <select className={styles.inputFormContainer} name="genero" value={form.genero} onChange={changeHandler}>
            <option value="">--Seleccionar--</option>
            {genero.map(genero => <option key={genero}>{genero}</option>)}
          </select><br></br>
          {errors.genero && <span className={styles.spanErrorNotification}>{errors.genero}</span>}
        </div>
        <div>
          <label className={styles.labelFormContainer}>Descripción: </label><br></br>
          <textarea className={styles.inputFormContainer} name="descripcion" value={form.descripcion} id="" cols="30" rows="5" onChange={changeHandler}></textarea><br></br>
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

        {productoDetail && productoDetail.opciones && (
          <Opciones opciones={productoDetail.opciones} setForm={setForm} form={form}/>
        )}

        <button className={styles.submitButton} type="submit">Actualizar producto</button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default FormEdit;