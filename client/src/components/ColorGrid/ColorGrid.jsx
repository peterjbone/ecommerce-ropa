import { useState } from "react"

const ColorGrid = ({ nameColors, setNameColors, colores, selectedColor, setSelectedColor, setForm }) => {

  // const [nameColors, setNameColors] = useState([]);

  const handleColorClick = (color) => {
    setNameColors([color.nombreColor]); // Select only the clicked color
    setSelectedColor(color);
    setForm((prevForm) => ({
      ...prevForm,
      opciones: [
        {
          color: color.nombreColor,
          tallas: {},
          imagenes: [],
        },
      ],
    }));
  };
  

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 40px)", gap: "10px" }}>
          {colores.map(color => (
            <div
              key={color.codHexadecimal}
              onClick={() => handleColorClick(color)}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: color.codHexadecimal,
                border: nameColors.includes(color.nombreColor) ? "3px solid cyan" : "3px solid transparent",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
    </div>
  )
}

export default ColorGrid
