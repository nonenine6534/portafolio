import { PROYECTOS } from '../data/contenido.js'
import TarjetaProyecto from './TarjetaProyecto.jsx'

// Componente SeccionProyectos: rejilla de tarjetas generada
// recorriendo el arreglo PROYECTOS con .map().
// Añadir un proyecto = añadir un objeto en contenido.js.
export default function SeccionProyectos({ t, idioma }) {
  return (
    <section id="proyectos" className="seccion">
      <h2>{t.proyectosTitulo}</h2>
      <p className="seccion-intro">{t.proyectosIntro}</p>

      <div className="tarjetas">
        {PROYECTOS.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            proyecto={proyecto}
            t={t}
            idioma={idioma}
          />
        ))}
      </div>
    </section>
  )
}
