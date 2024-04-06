import { useState } from 'react';

export default function CreateReview() {
  const [productoId, setProductoId] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [valoracion, setValoracion] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productoId,
      nombreUsuario,
      usuarioId,
      valoracion,
      descripcion
    });
    setProductoId('');
    setNombreUsuario('');
    setUsuarioId('');
    setValoracion(0);
    setDescripcion('');
  };

  return (
    <div>
      <h2>Crear Reseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="valoracion">Valoración:</label>
          <input
            type="number"
            id="valoracion"
            value={valoracion}
            onChange={(e) => setValoracion(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
}