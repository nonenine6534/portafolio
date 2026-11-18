import { useState, useEffect } from 'react'
import TarjetaProyecto from './components/TarjetaProyecto.jsx'
import './App.css'

// ============================================================
// Portafolio personal de Carlos Destrades — en React
//
// La página se divide en secciones (Sobre mí, Habilidades,
// Proyectos y Contacto) y las listas se generan a partir de
// arreglos de datos con .map(): para añadir un proyecto o
// una habilidad basta con agregar un elemento al arreglo.
// ============================================================

// Datos de las secciones (en un proyecto mayor vendrían de una API)
const HABILIDADES = [
  'JavaScript', 'C++', 'Python', 'Kotlin',
  'HTML5 y CSS3', 'React', 'FastAPI',
  'Android (Jetpack Compose)', 'Git y GitHub',
]

const PROYECTOS = [
  {
    titulo: 'WebChat',
    descripcion:
      'Chat web con React: envío de mensajes con botón o Enter, respuestas simuladas y marcas de tiempo.',
    tecnologias: 'React · Vite · JavaScript',
  },
  {
    titulo: 'App de Tareas',
    descripcion:
      'Lista de tareas con añadir, completar, filtrar y borrar. Los datos se guardan en el navegador con localStorage.',
    tecnologias: 'React · localStorage',
  },
  {
    titulo: 'Juego de Memoria',
    descripcion:
      'Juego de cartas para encontrar parejas, con contador de movimientos y cronómetro.',
    tecnologias: 'React · CSS Grid',
  },
  {
    titulo: 'API de Tareas',
    descripcion:
      'API REST con FastAPI: CRUD completo de tareas en memoria y documentación automática de los endpoints.',
    tecnologias: 'Python · FastAPI',
  },
  {
    titulo: 'Algoritmos en C++',
    descripcion:
      'Ordenamientos, búsquedas y estructuras de datos (pila, cola y lista enlazada) con un menú interactivo de demostración.',
    tecnologias: 'C++17 · Makefile',
  },
]

const CLAVE_TEMA = 'portafolio-tema'

export default function App() {
  // Tema visual: 'claro' u 'oscuro'. Se inicializa con lo
  // guardado en localStorage (si es la primera visita, 'claro').
  const [tema, setTema] = useState(() => localStorage.getItem(CLAVE_TEMA) || 'claro')

  // Formulario de contacto controlado: un solo objeto de estado
  const [formulario, setFormulario] = useState({ nombre: '', correo: '', mensaje: '' })

  // useEffect: cada vez que cambia el tema, se aplica al <html>
  // (las variables CSS hacen el resto) y se guarda la elección.
  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem(CLAVE_TEMA, tema)
  }, [tema])

  function alternarTema() {
    setTema((anterior) => (anterior === 'oscuro' ? 'claro' : 'oscuro'))
  }

  // Manejador genérico: actualiza el campo que cambió según
  // su atributo "name" (nombre, correo o mensaje).
  function cambiarCampo(evento) {
    const { name, value } = evento.target
    setFormulario((anterior) => ({ ...anterior, [name]: value }))
  }

  // El formulario no usa servidor: abre el correo del visitante
  // con el mensaje ya redactado (enlace mailto).
  function enviarMensaje(evento) {
    evento.preventDefault()
    const asunto = encodeURIComponent('Contacto desde tu portafolio — ' + formulario.nombre)
    const cuerpo = encodeURIComponent(
      formulario.mensaje + '\n\n— ' + formulario.nombre + ' (' + formulario.correo + ')'
    )
    window.location.href = `mailto:carlosshelby950@gmail.com?subject=${asunto}&body=${cuerpo}`
  }

  return (
    <>
      <header className="encabezado">
        <nav className="navegacion">
          <span className="logo">CD</span>
          <ul>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <button id="btn-tema" type="button" onClick={alternarTema}>
            {tema === 'oscuro' ? '☀️ Modo claro' : '🌙 Modo oscuro'}
          </button>
        </nav>

        <div className="presentacion">
          <h1>Hola, soy Carlos Destrades</h1>
          <p>
            Estudiante de 2.º año de Ingeniería en Ciencias Informáticas en la UCI (Cuba)
            y desarrollador en formación. Me gusta crear aplicaciones web y móviles
            que resuelvan problemas reales.
          </p>
          <a className="boton" href="#proyectos">Ver mis proyectos</a>
        </div>
      </header>

      <main>
        <section id="sobre-mi" className="seccion">
          <h2>Sobre mí</h2>
          <p>
            Estudio Ingeniería en Ciencias Informáticas en la Universidad de las
            Ciencias Informáticas (UCI), en La Habana. Mis lenguajes más fuertes son
            JavaScript, C++ y Python, y también desarrollo aplicaciones móviles para
            Android con Kotlin y Jetpack Compose.
          </p>
          <p>
            Aprendo construyendo proyectos completos: este portafolio forma parte de
            una colección de aplicaciones que he desarrollado para practicar
            desarrollo web, algoritmos y diseño de APIs. Mi nivel de inglés es B1
            (intermedio) y sigo mejorándolo cada día.
          </p>
        </section>

        <section id="habilidades" className="seccion">
          <h2>Habilidades</h2>
          <ul className="habilidades">
            {HABILIDADES.map((habilidad) => (
              <li key={habilidad}>{habilidad}</li>
            ))}
          </ul>
        </section>

        <section id="proyectos" className="seccion">
          <h2>Proyectos</h2>
          <div className="tarjetas">
            {PROYECTOS.map((proyecto) => (
              <TarjetaProyecto key={proyecto.titulo} proyecto={proyecto} />
            ))}
          </div>
        </section>

        <section id="contacto" className="seccion">
          <h2>Contacto</h2>
          <p>
            GitHub:{' '}
            <a href="https://github.com/nonenine6534" target="_blank" rel="noopener noreferrer">
              github.com/nonenine6534
            </a>
          </p>
          <p>
            Correo: <a href="mailto:carlosshelby950@gmail.com">carlosshelby950@gmail.com</a>
          </p>

          <form className="form-contacto" onSubmit={enviarMensaje}>
            <label>
              Tu nombre
              <input name="nombre" type="text" required value={formulario.nombre} onChange={cambiarCampo} />
            </label>
            <label>
              Tu correo
              <input name="correo" type="email" required value={formulario.correo} onChange={cambiarCampo} />
            </label>
            <label>
              Mensaje
              <textarea name="mensaje" rows="4" required value={formulario.mensaje} onChange={cambiarCampo} />
            </label>
            <button type="submit">Enviar mensaje</button>
          </form>
        </section>
      </main>

      <footer className="pie">
        <p>© {new Date().getFullYear()} Carlos Destrades — Hecho con React y Vite.</p>
      </footer>
    </>
  )
}
