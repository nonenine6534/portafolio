// Componente TarjetaProyecto: muestra un proyecto del portafolio.
//
// Recibe por "props":
//   proyecto -> { titulo, descripcionEs, descripcionEn,
//                 tecnologias[], github, demo, destacado }
//   t        -> textos del idioma activo (botones y etiqueta)
//   idioma   -> 'es' | 'en', para elegir la descripción
//
// La descripción se elige así: si el idioma es inglés se usa
// descripcionEn; en cualquier otro caso, descripcionEs.
export default function TarjetaProyecto({ proyecto, t, idioma }) {
  const descripcion = idioma === 'en' ? proyecto.descripcionEn : proyecto.descripcionEs

  return (
    <article className={proyecto.destacado ? 'tarjeta tarjeta-destacada' : 'tarjeta'}>
      {proyecto.destacado && <span className="tarjeta-etiqueta">★ {t.destacado}</span>}

      <h3>{proyecto.titulo}</h3>
      <p className="tarjeta-descripcion">{descripcion}</p>

      {/* Tecnologías como etiquetas pequeñas */}
      <ul className="tarjeta-tecnologias">
        {proyecto.tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      {/* Enlaces: GitHub siempre; demo solo si el proyecto la tiene */}
      <div className="tarjeta-enlaces">
        <a
          className="tarjeta-enlace tarjeta-enlace-principal"
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.verCodigo}
        </a>
        {proyecto.demo && (
          <a
            className="tarjeta-enlace"
            href={proyecto.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.verDemo}
          </a>
        )}
      </div>
    </article>
  )
}
