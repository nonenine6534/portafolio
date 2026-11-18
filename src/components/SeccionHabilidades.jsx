import { HABILIDADES, claveNivel } from '../data/contenido.js'

// Componente SeccionHabilidades: lista de habilidades con
// barra de nivel visible.
//
// Cada barra usa el nivel (0-100) de los datos como ancho
// en porcentaje: style={{ width: nivel + '%' }}.
// La etiqueta (Principiante / Intermedio / Avanzado) sale
// de claveNivel() y se traduce con el objeto t.
export default function SeccionHabilidades({ t }) {
  return (
    <section id="habilidades" className="seccion">
      <h2>{t.habilidadesTitulo}</h2>
      <p className="seccion-intro">{t.habilidadesIntro}</p>

      <div className="habilidades-grid">
        {HABILIDADES.map((habilidad) => (
          <article className="habilidad" key={habilidad.nombre}>
            <div className="habilidad-cabecera">
              <h3>{habilidad.nombre}</h3>
              <span className="habilidad-nivel-numero">{habilidad.nivel}%</span>
            </div>

            {/* Barra de progreso accesible: role y aria-* permiten
                que un lector de pantalla anuncie el nivel. */}
            <div
              className="barra"
              role="progressbar"
              aria-valuenow={habilidad.nivel}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={habilidad.nombre}
            >
              <div className="barra-relleno" style={{ width: `${habilidad.nivel}%` }} />
            </div>

            <p className="habilidad-meta">
              <span>{t[claveNivel(habilidad.nivel)]}</span>
              <span className="habilidad-categoria">{habilidad.categoria}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
