import { LINEA_TIEMPO } from '../data/contenido.js'

// Componente LineaTiempo: trayectoria en orden cronológico.
//
// Estructura visual: una lista vertical con una línea a la
// izquierda (CSS) y un punto por cada evento. Cada evento
// muestra periodo, tipo, título y descripción.
//
// El tipo ('formacion' | 'proyecto' | 'logro') se traduce
// buscando la clave correspondiente en el objeto t:
//   formacion -> t.tipoFormacion, etc.
const CLAVE_POR_TIPO = {
  formacion: 'tipoFormacion',
  proyecto: 'tipoProyecto',
  logro: 'tipoLogro',
}

export default function LineaTiempo({ t, idioma }) {
  return (
    <section id="trayectoria" className="seccion">
      <h2>{t.trayectoriaTitulo}</h2>
      <p className="seccion-intro">{t.trayectoriaIntro}</p>

      <ol className="linea-tiempo">
        {LINEA_TIEMPO.map((evento) => (
          <li className="linea-tiempo-item" key={evento.id}>
            <span className="linea-tiempo-punto" aria-hidden="true" />
            <div className="linea-tiempo-contenido">
              <p className="linea-tiempo-meta">
                <span className="linea-tiempo-periodo">{evento.periodo}</span>
                <span className={`linea-tiempo-tipo tipo-${evento.tipo}`}>
                  {t[CLAVE_POR_TIPO[evento.tipo]]}
                </span>
              </p>
              <h3>{idioma === 'en' ? evento.tituloEn : evento.tituloEs}</h3>
              <p>{idioma === 'en' ? evento.descripcionEn : evento.descripcionEs}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
