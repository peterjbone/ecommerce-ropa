import { useState } from 'react';

function StockTable({ sizes, stock, setStock, setForm }) {
  

  const handleInputChange = (event, size) => {
    const { value } = event.target;
    setStock(prevStock => ({
      ...prevStock,
      [size]: value
    }));
    setForm(prevForm => {
      return {...prevForm, tallas: {...stock, [size]: value}}
    })
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map(size => (
            <tr key={size}>
              <td>{size}</td>
              <td>
                <input
                  type="number"
                  value={stock[size] || ''}
                  onChange={(e) => handleInputChange(e, size)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable