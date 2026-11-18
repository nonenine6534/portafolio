// Componente TarjetaProyecto: muestra un proyecto del portafolio.
//
// Recibe por "props" un objeto proyecto con esta forma:
//   { titulo, descripcion, tecnologias }
// Al ser un componente aparte, la lista de proyectos se crea
// recorriendo un arreglo de datos con .map() en App.jsx.
export default function TarjetaProyecto({ proyecto }) {
  return (
    <article className="tarjeta">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <p className="tecnologias">{proyecto.tecnologias}</p>
    </article>
  )
}
