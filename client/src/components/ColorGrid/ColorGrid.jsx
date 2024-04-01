import { useState } from 'react'

const ColorGrid = ({ nameColors, setNameColors, colores, selectedColor, setSelectedColor, setForm }) => {

  // const [nameColors, setNameColors] = useState([]);

  const handleColorClick = (color) => {
    if(nameColors.includes(color.nombreColor)) {
      let newColors = nameColors.filter(elem => elem !== color.nombreColor);
      setNameColors(newColors)
      let newSelectedColors = selectedColor.filter(elem => elem.nombreColor !== color.nombreColor);
      setSelectedColor(newSelectedColors)
      setForm(prevForm => {
        return {...prevForm, colores: newSelectedColors}
      })
    } else {
      setNameColors([...nameColors, color.nombreColor]);
      setSelectedColor([...selectedColor, color])
      setForm(prevForm => {
        return {...prevForm, colores: [...prevForm.colores, color]}
      })
    }
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 40px)', gap: '10px' }}>
          {colores.map(color => (
            <div
              key={color.codHexadecimal}
              onClick={() => handleColorClick(color)}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: color.codHexadecimal,
                border: nameColors.includes(color.nombreColor) ? '3px solid cyan' : '3px solid transparent',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
    </div>
  )
}

export default ColorGrid
