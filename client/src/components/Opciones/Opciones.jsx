import { useState } from "react"
import styles from "./Opciones.module.css"
import StockTable from "../StockTable/StockTable"
import { uploadCloudinary } from "../../utils/upload";

const Opciones = ({ opciones, setForm, form }) => {

  let tallesL = ['S', 'M', 'L', 'XL', 'XLT', 'XXL']
  let tallesN = ['10.0', '10.5', '11.0', '11.5', '12.0', '12.5', '13.0', '13.5', '3.5', '4', '4.0',
  '4.5', '5', '5.0', '5.5', '6', '6.0', '6.5', '7', '7.0', '7.5', '8.0', '8.5', '9.0',
  '9.5'].sort((a, b) => a - b)
  
  let colores = [
    { codigosHex: "#FFFF00", nombres: "amarillo" },
    { codigosHex: "#0000FF", nombres: "azul" },
    { codigosHex: "#8ecae6", nombres: "azul-marino" },
    { codigosHex: "#F5F5DC", nombres: "beige" },
    { codigosHex: "#FFFFFF", nombres: "blanco" },
    { codigosHex: "#808080", nombres: "gris" },
    { codigosHex: "#000000", nombres: "negro" },
    { codigosHex: "#FF0000", nombres: "rojo" },
    { codigosHex: "#FFC0CB", nombres: "rosa" },
    { codigosHex: "#8B4513", nombres: "marron" },
    { codigosHex: "#008000", nombres: "verde" },
    { codigosHex: "#007FFF", nombres: "francia" },
    { codigosHex: "#fa8072", nombres: "salmon" },
    { codigosHex: "#78288C", nombres: "violeta" },
    { codigosHex: "#FF71CD", nombres: "rosado" }
  ]

  function getHexCode(nombreColor) {
    // Buscar el objeto que corresponde al nombre del color
    const colorEncontrado = colores.find(color => color.nombres === nombreColor);
    // Si se encontró el color, devolver su código hexadecimal; de lo contrario, devolver null
    return colorEncontrado ? colorEncontrado.codigosHex : null;
  }

  const [options, setOptions] = useState(opciones);
  const [images, setImages] = useState([])

  // console.log(opciones);

  const handleAddOption = () => {
    setOptions(prevOptions => [
      ...prevOptions,
      {
        colores: { codigosHex: ['#000000'], nombres: ['negro'] },
        tallas: [],
        imagenes: []
      }
    ]);
  };

  const handleDeleteOption = index => {
    setOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      updatedOptions.splice(index, 1);
      return updatedOptions;
    });
    setForm(prevForm => {
      const updatedForm = { ...prevForm };
      updatedForm.opciones.splice(index, 1); 
      return updatedForm;
    });
  };

  //const initialTipoTalle =/* options.length > 0 && options[0].tallas && options[0].tallas.length > 0 && options[0].tallas[0] &&*/ isNaN(Number(options[0].tallas[0].talla)) ? 'L' : 'N';

  const initialTipoTalle =
  options.length > 0 &&
  options[0] &&
  options[0].tallas &&
  options[0].tallas.length > 0 &&
  isNaN(Number(options[0].tallas[0].talla))
    ? "L"
    : "N";

  const [tipoTalle, setTipoTalle] = useState(initialTipoTalle);

  const tipoTalleHandler = (e) => {
    // setForm({...form, tallas: {}})
    // setStock([])
    setTipoTalle(e.target.value)
  }

  const handleColorChange = (index, selectedColor) => {
    setOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].colores.nombres[0] = selectedColor;
      updatedOptions[index].colores.codigosHex[0] = getHexCode(selectedColor);
      return updatedOptions;
    });
    setForm({ ...form, opciones: options })
  };
  // console.log(opciones);

  const handleStockChange = (index, updatedStock) => {
    setOptions(prevOptions => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].tallas = updatedStock;
      return updatedOptions;
    });
    setForm({ ...form, opciones: options })
  };

  const handleImagenChange = async (index, files) => {
    try {
      // Upload each file to Cloudinary
      const uploadPromises = Array.from(files)?.map(file => uploadCloudinary(file));
      const uploadedImages = await Promise.all(uploadPromises);

      // Update the imagenes array with the uploaded image URLs
      setOptions(prevOptions => {
        const updatedOptions = [...prevOptions];
        updatedOptions[index].imagenes = uploadedImages?.map(image => image.url);
        return updatedOptions;
      });
      setForm({ ...form, opciones: options })
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (

    <div>
      {options?.map((item, index) => ( // Added parentheses to wrap JSX
        <div key={index} className={styles.singleOptionContainer}>
          <div>
            <label className={styles.labelFormContainer}>Color: </label>
            <select name="color" value={item.colores.nombres[0] || ""} onChange={(e) => handleColorChange(index, e.target.value)} >
              <option value="">--Seleccionar--</option>
              {colores?.map(color => <option key={color.nombres}>{color.nombres}</option>)}
            </select>
          </div>

          <div>
            {item.imagenes?.map((image, index) => <img className={styles.thumbnailOpciones} key={index} width={80} height={80} src={image} />)}

            <div>
              <label className={styles.labelFormContainer}>Imágenes: </label>
              <input type="file" multiple={true}
                onChange={(e) => handleImagenChange(index, e.target.files)}
                /*onChange={(e) => setImages(e.target.files)}*/ />
            </div>
          </div>

          <div>
            <label className={styles.labelFormContainer}>Tipo de talle</label>
            <select name="tipoTalle" value={tipoTalle} onChange={tipoTalleHandler}>
              <option value="">--Seleccionar--</option>
              <option value="L">Letras</option>
              <option value="N">Números</option>
            </select>

            {tipoTalle === 'L' && <StockTable sizes={tallesL} stock={item.tallas} setOptions={setOptions} setStock={(updatedStock) => handleStockChange(index, updatedStock)} />}
            {tipoTalle === 'N' && <StockTable sizes={tallesN} stock={item.tallas} setOptions={setOptions} setStock={(updatedStock) => handleStockChange(index, updatedStock)} />}
          </div>

          <div>
            <button type="button" onClick={() => handleDeleteOption(index)}>Delete Option</button>
          </div>
        </div>
      ))}

      <button type="button" onClick={handleAddOption}>Add Option</button>
    </div>
  )
}

export default Opciones;