import styles from "./StockTable.module.css"

function StockTable({ sizes, stock = [], setStock, setForm, setOptions }) {

  // const handleInputChange = (event, size) => {
  //   const { value } = event.target;
  //   const updatedStock = stock?.map(item =>
  //     item.talla === size ? { ...item, stock: value } : item
  //   );
  //   setStock(updatedStock);
  //   // setForm(prevForm => {
  //   //   return {...prevForm, tallas: {...stock, [size]: value}}
  //   // })
  // };
  // console.log(stock);

  const handleInputChange = (event, size) => {
    const { value } = event.target;
    const existingItemIndex = stock.findIndex(item => item.talla === size);
    // console.log("value: ", value, "index: ", existingItemIndex);
    if (existingItemIndex !== -1) {
      // si size existe en el array stock, actualiza el valor de stock
      const updatedStock = [...stock];
      updatedStock[existingItemIndex] = { talla: size, stock: value };
      setStock(updatedStock);
    } else {
      // si size no existe en el array stock, los agrega con el valor de stock
      // setStock(prevStock => [...prevStock, { talla: size, stock: value }]);
      setStock([...stock, { talla: size, stock: value }]);
    }

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
          {sizes?.map(size => (
            <tr key={size}>
              <td>{size}</td>
              <td>
                <input
                  className={styles.inputStock}
                  type="number"
                  value={stock?.find(item => item.talla === size)?.stock || ""}
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