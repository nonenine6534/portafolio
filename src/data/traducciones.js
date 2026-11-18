// ============================================================
// Traducciones de toda la interfaz (español / inglés)
//
// Idea clave: ningún texto visible está escrito directamente
// en los componentes. Todo sale de este objeto usando la
// clave del idioma activo:  t = traducciones[idioma]
// Así, cambiar de idioma es cambiar un solo valor de estado
// y toda la página se vuelve a dibujar en el otro idioma.
//
// Para añadir un texto nuevo: se agrega la misma clave en
// "es" y en "en" y se usa como {t.clave} en el componente.
// ============================================================

export const traducciones = {
  es: {
    // Navegación
    navSobreMi: 'Sobre mí',
    navHabilidades: 'Habilidades',
    navProyectos: 'Proyectos',
    navTrayectoria: 'Trayectoria',
    navContacto: 'Contacto',
    temaClaro: '☀️ Claro',
    temaOscuro: '🌙 Oscuro',
    idiomaEtiqueta: 'Idioma',

    // Presentación (hero)
    saludo: 'Hola, soy Carlos Destrades',
    rol: 'Desarrollador web y móvil en formación',
    presentacion:
      'Estudiante de 2.º año de Ingeniería en Ciencias Informáticas en la UCI (Cuba). Construyo aplicaciones web con JavaScript y React, APIs con Python y apps Android con Kotlin que resuelven problemas reales.',
    verProyectos: 'Ver mis proyectos',
    contactar: 'Contactar',
    datoUniversidad: 'UCI · La Habana, Cuba',
    datoIngles: 'Inglés B1 (intermedio)',
    datoBusqueda: 'Busco trabajo remoto de programación',

    // Sobre mí
    sobreMiTitulo: 'Sobre mí',
    sobreMiP1:
      'Estudio Ingeniería en Ciencias Informáticas en la Universidad de las Ciencias Informáticas (UCI), en La Habana. Mis lenguajes más fuertes son JavaScript, C++ y Python, y también desarrollo aplicaciones móviles para Android con Kotlin y Jetpack Compose.',
    sobreMiP2:
      'Aprendo construyendo proyectos completos y publicándolos en GitHub: un sitio web institucional, una app Android para mi universidad, un webchat, una API REST y varios juegos y utilidades. Me interesa el trabajo remoto y colaborar en equipos donde pueda seguir creciendo como desarrollador.',
    sobreMiP3:
      'Mi nivel de inglés es B1 (intermedio): puedo leer documentación técnica y mantener una conversación básica de trabajo, y sigo mejorándolo cada día.',

    // Habilidades
    habilidadesTitulo: 'Habilidades',
    habilidadesIntro:
      'Nivel estimado según mi experiencia en la universidad y en proyectos personales. Las barras se calculan desde los datos, no están dibujadas a mano.',
    nivelPrincipiante: 'Principiante',
    nivelIntermedio: 'Intermedio',
    nivelAvanzado: 'Avanzado',

    // Proyectos
    proyectosTitulo: 'Proyectos',
    proyectosIntro:
      'Proyectos reales que he construido y publicado. Cada tarjeta enlaza al código en GitHub y, cuando existe, a una demo en vivo.',
    verCodigo: 'Código en GitHub',
    verDemo: 'Ver demo',
    destacado: 'Destacado',

    // Línea de tiempo
    trayectoriaTitulo: 'Trayectoria',
    trayectoriaIntro:
      'Mi formación y los proyectos más importantes, en orden cronológico.',
    tipoFormacion: 'Formación',
    tipoProyecto: 'Proyecto',
    tipoLogro: 'Logro',

    // Contacto
    contactoTitulo: 'Contacto',
    contactoIntro:
      '¿Tienes una oportunidad, una práctica o un proyecto en mente? Escríbeme por GitHub, por correo o con este formulario.',
    etiquetaGithub: 'GitHub',
    etiquetaCorreo: 'Correo',
    formNombre: 'Tu nombre',
    formNombrePlaceholder: 'Ej. María Pérez',
    formCorreo: 'Tu correo',
    formCorreoPlaceholder: 'Ej. maria@empresa.com',
    formMensaje: 'Mensaje',
    formMensajePlaceholder: 'Cuéntame en qué puedo ayudarte (mínimo 20 caracteres)…',
    formEnviar: 'Enviar mensaje',
    formEnviando: 'Enviando…',
    errorNombre: 'Escribe tu nombre (mínimo 2 caracteres).',
    errorCorreo: 'Escribe un correo válido, por ejemplo nombre@empresa.com.',
    errorMensaje: 'El mensaje debe tener al menos 20 caracteres.',
    exitoTitulo: '¡Mensaje enviado!',
    exitoTexto:
      'Gracias por escribir. Esta es una simulación sin servidor: en un proyecto real aquí se llamaría a una API. También puedes escribirme directo a carlosshelby950@gmail.com.',
    enviarOtro: 'Enviar otro mensaje',

    // Pie de página
    pieTexto: 'Hecho con React y Vite.',
    pieVolver: 'Volver arriba ↑',
  },

  en: {
    // Navigation
    navSobreMi: 'About me',
    navHabilidades: 'Skills',
    navProyectos: 'Projects',
    navTrayectoria: 'Timeline',
    navContacto: 'Contact',
    temaClaro: '☀️ Light',
    temaOscuro: '🌙 Dark',
    idiomaEtiqueta: 'Language',

    // Hero
    saludo: "Hi, I'm Carlos Destrades",
    rol: 'Web & mobile developer in training',
    presentacion:
      '2nd-year Computer Science Engineering student at UCI (Cuba). I build web apps with JavaScript and React, APIs with Python, and Android apps with Kotlin that solve real problems.',
    verProyectos: 'See my projects',
    contactar: 'Contact me',
    datoUniversidad: 'UCI · Havana, Cuba',
    datoIngles: 'English B1 (intermediate)',
    datoBusqueda: 'Looking for remote programming work',

    // About me
    sobreMiTitulo: 'About me',
    sobreMiP1:
      'I study Computer Science Engineering at the University of Informatics Sciences (UCI) in Havana. My strongest languages are JavaScript, C++ and Python, and I also build Android apps with Kotlin and Jetpack Compose.',
    sobreMiP2:
      'I learn by building complete projects and publishing them on GitHub: an institutional website, an Android app for my university, a web chat, a REST API, and several games and utilities. I am interested in remote work and in joining a team where I can keep growing as a developer.',
    sobreMiP3:
      'My English level is B1 (intermediate): I can read technical documentation and hold a basic work conversation, and I keep improving it every day.',

    // Skills
    habilidadesTitulo: 'Skills',
    habilidadesIntro:
      'Estimated level based on my university experience and personal projects. The bars are calculated from the data, not drawn by hand.',
    nivelPrincipiante: 'Beginner',
    nivelIntermedio: 'Intermediate',
    nivelAvanzado: 'Advanced',

    // Projects
    proyectosTitulo: 'Projects',
    proyectosIntro:
      'Real projects I have built and published. Each card links to the code on GitHub and, when available, to a live demo.',
    verCodigo: 'Code on GitHub',
    verDemo: 'Live demo',
    destacado: 'Featured',

    // Timeline
    trayectoriaTitulo: 'Timeline',
    trayectoriaIntro:
      'My education and my most important projects, in chronological order.',
    tipoFormacion: 'Education',
    tipoProyecto: 'Project',
    tipoLogro: 'Milestone',

    // Contact
    contactoTitulo: 'Contact',
    contactoIntro:
      'Do you have an opportunity, an internship or a project in mind? Reach me on GitHub, by email, or with this form.',
    etiquetaGithub: 'GitHub',
    etiquetaCorreo: 'Email',
    formNombre: 'Your name',
    formNombrePlaceholder: 'E.g. Mary Smith',
    formCorreo: 'Your email',
    formCorreoPlaceholder: 'E.g. mary@company.com',
    formMensaje: 'Message',
    formMensajePlaceholder: 'Tell me how I can help you (at least 20 characters)…',
    formEnviar: 'Send message',
    formEnviando: 'Sending…',
    errorNombre: 'Please enter your name (at least 2 characters).',
    errorCorreo: 'Please enter a valid email, e.g. name@company.com.',
    errorMensaje: 'The message must be at least 20 characters long.',
    exitoTitulo: 'Message sent!',
    exitoTexto:
      'Thanks for writing. This is a simulation with no server: in a real project this would call an API. You can also email me directly at carlosshelby950@gmail.com.',
    enviarOtro: 'Send another message',

    // Footer
    pieTexto: 'Built with React and Vite.',
    pieVolver: 'Back to top ↑',
  },
}
