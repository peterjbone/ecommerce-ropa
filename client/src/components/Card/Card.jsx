
const Card = ({ image, name, price }) => {

  return (
    <div>
      <img width={300} height={300} src={image} alt={`Imagen producto ${name}`} />
      <h3>{name}</h3>
      <h4>${price}</h4>
    </div>
  )
}

export default Card
