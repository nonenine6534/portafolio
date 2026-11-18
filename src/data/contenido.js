// ============================================================
// Datos del portafolio: habilidades, proyectos y trayectoria
//
// Separar los datos de los componentes tiene una ventaja
// práctica: para actualizar el portafolio (un proyecto nuevo,
// un nivel que sube) solo se toca este archivo, sin buscar
// entre el JSX.
//
// Los textos que cambian con el idioma llevan dos campos:
// nombreEs / nombreEn, descripcionEs / descripcionEn, etc.
// El componente elige el campo según el idioma activo.
// ============================================================

// ---------- Habilidades con nivel (0 a 100) ----------
// El nivel se usa para el ancho de la barra y para la
// etiqueta: 0-49 principiante, 50-74 intermedio, 75-100 avanzado.
export const HABILIDADES = [
  { nombre: 'JavaScript', nivel: 85, categoria: 'Lenguaje' },
  { nombre: 'C++', nivel: 80, categoria: 'Lenguaje' },
  { nombre: 'Python', nivel: 78, categoria: 'Lenguaje' },
  { nombre: 'HTML5 y CSS3', nivel: 85, categoria: 'Web' },
  { nombre: 'React', nivel: 72, categoria: 'Web' },
  { nombre: 'FastAPI', nivel: 68, categoria: 'Backend' },
  { nombre: 'Kotlin · Jetpack Compose', nivel: 65, categoria: 'Móvil' },
  { nombre: 'Git y GitHub', nivel: 75, categoria: 'Herramientas' },
  { nombre: 'SQL', nivel: 60, categoria: 'Datos' },
  { nombre: 'Linux (Fedora)', nivel: 70, categoria: 'Herramientas' },
]

// Devuelve la clave de nivel según el porcentaje.
// La traducción de la etiqueta vive en traducciones.js.
export function claveNivel(nivel) {
  if (nivel >= 75) return 'nivelAvanzado'
  if (nivel >= 50) return 'nivelIntermedio'
  return 'nivelPrincipiante'
}

// ---------- Proyectos ----------
// github: enlace al repositorio (obligatorio)
// demo: enlace a la demo en vivo (solo si existe; si es null
//       la tarjeta no muestra ese botón)
// destacado: true marca la tarjeta con una etiqueta especial
export const PROYECTOS = [
  {
    id: 'sitio-uci',
    titulo: 'Sitio web de la UCI',
    descripcionEs:
      'Sitio web institucional sobre la Universidad de las Ciencias Informáticas: historia, carreras y vida universitaria, publicado con GitHub Pages.',
    descripcionEn:
      'Institutional website about the University of Informatics Sciences: history, degree programs and campus life, published with GitHub Pages.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/nonenine6534/sitio-web-uci',
    demo: null,
    destacado: true,
  },
  {
    id: 'uci-movil',
    titulo: 'UCI Móvil (Android)',
    descripcionEs:
      'App Android nativa para estudiantes de la UCI: pantalla de inicio, panel principal, conexión al portal WiFi cautivo e intranet universitaria en WebView.',
    descripcionEn:
      'Native Android app for UCI students: splash screen, dashboard, connection to the captive WiFi portal and the university intranet in a WebView.',
    tecnologias: ['Kotlin', 'Jetpack Compose', 'Android'],
    github: 'https://github.com/nonenine6534/sitio-web-uci',
    demo: null,
    destacado: true,
  },
  {
    id: 'webchat',
    titulo: 'WebChat',
    descripcionEs:
      'Chat web en tiempo real simulado: envío con botón o Enter, respuestas automáticas, marcas de tiempo y contactos de práctica, incluido uno para practicar entrevistas en inglés.',
    descripcionEn:
      'Simulated real-time web chat: send with button or Enter, automatic replies, timestamps and practice contacts, including one for English interview practice.',
    tecnologias: ['React', 'Vite', 'JavaScript'],
    github: 'https://github.com/nonenine6534/webchat',
    demo: null,
    destacado: false,
  },
  {
    id: 'todo-app',
    titulo: 'App de Tareas (To-Do)',
    descripcionEs:
      'Lista de tareas completa: añadir, completar, filtrar por estado y borrar, con persistencia en el navegador mediante localStorage.',
    descripcionEn:
      'Complete to-do list: add, complete, filter by status and delete tasks, with persistence in the browser through localStorage.',
    tecnologias: ['React', 'localStorage', 'CSS'],
    github: 'https://github.com/nonenine6534/todo-app',
    demo: null,
    destacado: false,
  },
  {
    id: 'notas-app',
    titulo: 'App de Notas',
    descripcionEs:
      'Aplicación para crear, buscar, editar y eliminar notas, guardadas en localStorage. Practica operaciones CRUD sobre un arreglo de estado.',
    descripcionEn:
      'App to create, search, edit and delete notes, stored in localStorage. It practices CRUD operations over a state array.',
    tecnologias: ['React', 'JavaScript', 'localStorage'],
    github: 'https://github.com/nonenine6534/notas-app',
    demo: null,
    destacado: false,
  },
  {
    id: 'juego-memoria',
    titulo: 'Juego de Memoria',
    descripcionEs:
      'Juego de cartas para encontrar parejas: contador de movimientos, cronómetro, niveles de dificultad y detección de victoria.',
    descripcionEn:
      'Card matching game: move counter, timer, difficulty levels and win detection.',
    tecnologias: ['React', 'CSS Grid', 'JavaScript'],
    github: 'https://github.com/nonenine6534/juego-memoria',
    demo: null,
    destacado: false,
  },
  {
    id: 'api-tareas',
    titulo: 'API de Tareas con FastAPI',
    descripcionEs:
      'API REST con CRUD completo de tareas, validación con Pydantic y documentación automática en /docs. Incluye pruebas y estructura por módulos.',
    descripcionEn:
      'REST API with full task CRUD, Pydantic validation and automatic documentation at /docs. Includes tests and a modular structure.',
    tecnologias: ['Python', 'FastAPI', 'Pydantic'],
    github: 'https://github.com/nonenine6534/api-tareas-python',
    demo: null,
    destacado: false,
  },
  {
    id: 'algoritmos-cpp',
    titulo: 'Algoritmos en C++',
    descripcionEs:
      'Colección de algoritmos y estructuras de datos: ordenamientos, búsquedas, pila, cola y lista enlazada, con menú interactivo de demostración.',
    descripcionEn:
      'Collection of algorithms and data structures: sorting, searching, stack, queue and linked list, with an interactive demo menu.',
    tecnologias: ['C++17', 'Makefile', 'POO'],
    github: 'https://github.com/nonenine6534/algoritmos-cpp',
    demo: null,
    destacado: false,
  },
]

// ---------- Línea de tiempo (trayectoria) ----------
// tipo: 'formacion' | 'proyecto' | 'logro'
// La etiqueta visible de cada tipo se traduce en el componente.
export const LINEA_TIEMPO = [
  {
    id: 'inicio-uci',
    periodo: '2024',
    tipo: 'formacion',
    tituloEs: 'Inicio en la UCI',
    tituloEn: 'Started at UCI',
    descripcionEs:
      'Comienzo la carrera de Ingeniería en Ciencias Informáticas en la Universidad de las Ciencias Informáticas (La Habana, Cuba). Primeros pasos sólidos en programación con C++ y fundamentos de algoritmos.',
    descripcionEn:
      'I start the Computer Science Engineering degree at the University of Informatics Sciences (Havana, Cuba). Solid first steps in programming with C++ and algorithm fundamentals.',
  },
  {
    id: 'bases-web',
    periodo: '2024 – 2025',
    tipo: 'formacion',
    tituloEs: 'Bases de desarrollo web y Python',
    tituloEn: 'Web development and Python foundations',
    descripcionEs:
      'Aprendo HTML, CSS y JavaScript construyendo páginas completas, y Python para scripts y lógica de backend. Empiezo a usar Git y GitHub para versionar todo lo que hago.',
    descripcionEn:
      'I learn HTML, CSS and JavaScript by building complete pages, and Python for scripts and backend logic. I start using Git and GitHub to version everything I build.',
  },
  {
    id: 'sitio-uci',
    periodo: '2025',
    tipo: 'proyecto',
    tituloEs: 'Sitio web de la UCI y app UCI Móvil',
    tituloEn: 'UCI website and UCI Móvil app',
    descripcionEs:
      'Publico el sitio web de la UCI en GitHub y desarrollo UCI Móvil, una app Android nativa en Kotlin con Jetpack Compose que conecta a los estudiantes con el WiFi y la intranet de la universidad.',
    descripcionEn:
      'I publish the UCI website on GitHub and build UCI Móvil, a native Android app in Kotlin with Jetpack Compose that connects students to the university WiFi and intranet.',
  },
  {
    id: 'pack-react',
    periodo: '2025',
    tipo: 'proyecto',
    tituloEs: 'Serie de proyectos en React y FastAPI',
    tituloEn: 'React and FastAPI project series',
    descripcionEs:
      'Construyo una colección completa de proyectos: webchat, app de tareas, app de notas, juego de memoria, API REST con FastAPI y algoritmos en C++. Todos publicados en GitHub con README detallado.',
    descripcionEn:
      'I build a complete project collection: web chat, to-do app, notes app, memory game, a REST API with FastAPI and algorithms in C++. All published on GitHub with detailed READMEs.',
  },
  {
    id: 'primera-postulacion',
    periodo: '2025',
    tipo: 'logro',
    tituloEs: 'Primera postulación a un empleo remoto',
    tituloEn: 'First remote job application',
    descripcionEs:
      'Envío mi primera postulación real a una empresa de desarrollo remoto (Melt Studio, puesto junior), con CV y cartas preparadas desde mi stack real. Sigo en 2.º año, mejorando mi inglés (B1) y buscando mi primera oportunidad profesional.',
    descripcionEn:
      'I send my first real application to a remote software company (Melt Studio, junior role), with a CV and cover letters based on my real stack. I am still in my 2nd year, improving my English (B1) and looking for my first professional opportunity.',
  },
]

// Datos de contacto reutilizados en varias secciones
export const CONTACTO = {
  githubUsuario: 'nonenine6534',
  githubUrl: 'https://github.com/nonenine6534',
  correo: 'carlosshelby950@gmail.com',
}
