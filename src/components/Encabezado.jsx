// Componente Encabezado: barra de navegación + presentación (hero).
//
// Recibe por props:
//   t         -> textos del idioma activo (de traducciones.js)
//   idioma    -> 'es' | 'en'
//   alCambiarIdioma(idioma) -> cambia el idioma en App
//   tema      -> 'claro' | 'oscuro'
//   alAlternarTema() -> cambia el tema en App
//
// El encabezado es "sticky" (se queda fijo arriba al hacer
// scroll) para que la navegación esté siempre a mano.
export default function Encabezado({ t, idioma, alCambiarIdioma, tema, alAlternarTema }) {
  return (
    <header className="encabezado">
      <nav className="navegacion" aria-label="Principal">
        <span className="logo">CD<span className="logo-punto">.</span></span>

        <ul className="nav-enlaces">
          <li><a href="#sobre-mi">{t.navSobreMi}</a></li>
          <li><a href="#habilidades">{t.navHabilidades}</a></li>
          <li><a href="#proyectos">{t.navProyectos}</a></li>
          <li><a href="#trayectoria">{t.navTrayectoria}</a></li>
          <li><a href="#contacto">{t.navContacto}</a></li>
        </ul>

        <div className="nav-controles">
          {/* Selector de idioma: dos botones, el activo se resalta.
              La elección se guarda en localStorage desde App. */}
          <div className="selector-idioma" role="group" aria-label={t.idiomaEtiqueta}>
            <button
              type="button"
              className={idioma === 'es' ? 'idioma activo' : 'idioma'}
              onClick={() => alCambiarIdioma('es')}
              aria-pressed={idioma === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              className={idioma === 'en' ? 'idioma activo' : 'idioma'}
              onClick={() => alCambiarIdioma('en')}
              aria-pressed={idioma === 'en'}
            >
              EN
            </button>
          </div>

          <button className="btn-tema" type="button" onClick={alAlternarTema}>
            {tema === 'oscuro' ? t.temaClaro : t.temaOscuro}
          </button>
        </div>
      </nav>

      <div className="presentacion">
        <p className="presentacion-rol">{t.rol}</p>
        <h1>{t.saludo}</h1>
        <p className="presentacion-texto">{t.presentacion}</p>

        {/* Datos rápidos en forma de etiquetas */}
        <ul className="datos-rapidos">
          <li>🎓 {t.datoUniversidad}</li>
          <li>🗣️ {t.datoIngles}</li>
          <li>💼 {t.datoBusqueda}</li>
        </ul>

        <div className="presentacion-botones">
          <a className="boton" href="#proyectos">{t.verProyectos}</a>
          <a className="boton boton-secundario" href="#contacto">{t.contactar}</a>
        </div>
      </div>
    </header>
  )
}
