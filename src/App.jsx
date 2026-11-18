import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado.jsx'
import SeccionHabilidades from './components/SeccionHabilidades.jsx'
import SeccionProyectos from './components/SeccionProyectos.jsx'
import LineaTiempo from './components/LineaTiempo.jsx'
import FormularioContacto from './components/FormularioContacto.jsx'
import { traducciones } from './data/traducciones.js'
import { CONTACTO } from './data/contenido.js'
import './App.css'

// ============================================================
// Portafolio personal de Carlos Destrades — React + Vite
//
// App es el componente raíz y solo coordina:
//   - el idioma activo ('es' | 'en'), guardado en localStorage
//   - el tema visual ('claro' | 'oscuro'), guardado en localStorage
//   - la composición de las secciones
//
// Cada sección vive en su propio componente (src/components/)
// y todos los textos salen de src/data/traducciones.js, así
// que cambiar de idioma actualiza TODA la página a la vez.
// ============================================================

const CLAVE_TEMA = 'portafolio-tema'
const CLAVE_IDIOMA = 'portafolio-idioma'

export default function App() {
  // Tema: se inicia con lo guardado; si no hay nada, 'claro'.
  const [tema, setTema] = useState(() => localStorage.getItem(CLAVE_TEMA) || 'claro')

  // Idioma: se inicia con lo guardado; si no hay nada, 'es'.
  // Solo se aceptan 'es' y 'en' para evitar un valor raro.
  const [idioma, setIdioma] = useState(() => {
    const guardado = localStorage.getItem(CLAVE_IDIOMA)
    return guardado === 'en' ? 'en' : 'es'
  })

  // t = textos del idioma activo. Todos los componentes
  // reciben este objeto y leen sus textos de ahí.
  const t = traducciones[idioma]

  // Al cambiar el tema: se aplica al <html> (las variables
  // CSS hacen el resto) y se guarda la elección.
  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem(CLAVE_TEMA, tema)
  }, [tema])

  // Al cambiar el idioma: se guarda, se actualiza el atributo
  // lang del documento y el título de la pestaña.
  useEffect(() => {
    localStorage.setItem(CLAVE_IDIOMA, idioma)
    document.documentElement.lang = idioma
    document.title =
      idioma === 'en'
        ? 'Carlos Destrades — Portfolio | Web & Mobile Developer'
        : 'Carlos Destrades — Portafolio | Desarrollador web y móvil'
  }, [idioma])

  function alternarTema() {
    setTema((anterior) => (anterior === 'oscuro' ? 'claro' : 'oscuro'))
  }

  return (
    <>
      <Encabezado
        t={t}
        idioma={idioma}
        alCambiarIdioma={setIdioma}
        tema={tema}
        alAlternarTema={alternarTema}
      />

      <main>
        {/* ---------- Sobre mí ---------- */}
        <section id="sobre-mi" className="seccion">
          <h2>{t.sobreMiTitulo}</h2>
          <p>{t.sobreMiP1}</p>
          <p>{t.sobreMiP2}</p>
          <p>{t.sobreMiP3}</p>
        </section>

        <SeccionHabilidades t={t} />

        <SeccionProyectos t={t} idioma={idioma} />

        <LineaTiempo t={t} idioma={idioma} />

        {/* ---------- Contacto ---------- */}
        <section id="contacto" className="seccion">
          <h2>{t.contactoTitulo}</h2>
          <p className="seccion-intro">{t.contactoIntro}</p>

          <div className="contacto-datos">
            <p>
              <strong>{t.etiquetaGithub}:</strong>{' '}
              <a href={CONTACTO.githubUrl} target="_blank" rel="noopener noreferrer">
                github.com/{CONTACTO.githubUsuario}
              </a>
            </p>
            <p>
              <strong>{t.etiquetaCorreo}:</strong>{' '}
              <a href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>
            </p>
          </div>

          <FormularioContacto t={t} />
        </section>
      </main>

      <footer className="pie">
        <p>
          © {new Date().getFullYear()} Carlos Destrades — {t.pieTexto}
        </p>
        <a href="#sobre-mi">{t.pieVolver}</a>
      </footer>
    </>
  )
}
