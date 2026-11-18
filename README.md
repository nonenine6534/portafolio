# Portafolio personal — Carlos Destrades

Portafolio web de **Carlos Destrades**, estudiante de 2.º año de Ingeniería en Ciencias Informáticas en la UCI (La Habana, Cuba) y desarrollador web y móvil en formación.

Es una aplicación de una sola página (SPA) construida con **React y Vite**, pensada para presentarme ante reclutadores y empresas de trabajo remoto: muestra quién soy, qué sé hacer con niveles visibles, mis proyectos reales con enlaces a GitHub, mi trayectoria en una línea de tiempo y un formulario de contacto funcional en el navegador.

- **GitHub:** [github.com/nonenine6534](https://github.com/nonenine6534)
- **Correo:** carlosshelby950@gmail.com
- **Idiomas de la página:** español e inglés (selector ES/EN)

## Características

- **Bilingüe ES/EN:** selector de idioma que cambia **todos** los textos de la página (navegación, presentación, habilidades, proyectos, línea de tiempo, formulario y pie). La elección se guarda en `localStorage` y se recuerda entre visitas. También actualiza el atributo `lang` del documento y el título de la pestaña.
- **Sección «Sobre mí»** con presentación, rol, universidad, nivel de inglés (B1) y búsqueda de trabajo remoto.
- **Habilidades con niveles visibles:** 10 habilidades con barra de progreso, porcentaje y etiqueta de nivel (Principiante / Intermedio / Avanzado), todo calculado desde los datos.
- **Proyectos reales en tarjetas:** 8 proyectos (sitio web de la UCI, app Android UCI Móvil, webchat, app de tareas, app de notas, juego de memoria, API con FastAPI y algoritmos en C++), cada uno con tecnologías en etiquetas, enlace **«Código en GitHub»** y botón de demo cuando aplica. Los proyectos destacados llevan etiqueta especial.
- **Línea de tiempo (Trayectoria):** formación y proyectos en orden cronológico desde 2024, con tipo de evento (Formación / Proyecto / Logro) y diseño vertical con puntos sobre una línea.
- **Formulario de contacto con validación propia:** nombre (mínimo 2 caracteres), correo con formato válido y mensaje (mínimo 20 caracteres, con contador). Muestra errores por campo al salir del campo y al enviar, y simula el envío con estado «Enviando…» y pantalla de éxito (sin backend).
- **Modo oscuro / claro** con botón; la elección se guarda en `localStorage`. Todo el tema se controla con variables CSS.
- **Diseño responsive pulido:** navegación fija (sticky), rejillas que se adaptan (`auto-fit`), breakpoints para tablet y móvil, desplazamiento suave y foco visible para navegación con teclado.
- **SEO en `index.html`:** `description`, `keywords`, `author`, `robots`, `theme-color`, Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`) y tarjeta de Twitter, con `lang="es"` correcto.

## Tecnologías

- **React 18** — componentes funcionales, JSX, `props`, `useState` y `useEffect`.
- **Vite 5** — servidor de desarrollo y empaquetado de producción.
- **JavaScript (ES Modules)** — sin TypeScript, para mantener el código claro y explicable.
- **CSS moderno** — variables CSS para temas, Flexbox, CSS Grid, `position: sticky`, transiciones y media queries.
- **localStorage** — persistencia del idioma, del tema y uso en otros proyectos enlazados.
- **HTML5 semántico y accesible** — `header`, `nav`, `main`, `section`, `footer`, roles ARIA en barras de progreso y errores del formulario.

## Cómo ejecutarlo

Requisitos: **Node.js 18 o superior**.

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev     # arranca el servidor de desarrollo
```

Después abre en el navegador la dirección que muestra Vite (normalmente http://localhost:5173).

Para generar la versión de producción:

```bash
npm run build   # crea la carpeta dist/ lista para publicar
npm run preview # (opcional) previsualiza esa versión de producción
```

## Estructura de carpetas

```
portafolio/
├── index.html                  # HTML base + meta tags SEO y Open Graph
├── package.json                # dependencias y scripts de npm
├── vite.config.js              # configuración de Vite + plugin de React
└── src/
    ├── main.jsx                # punto de entrada: monta <App />
    ├── App.jsx                 # componente raíz: idioma, tema y composición
    ├── App.css                 # estilos de todos los componentes
    ├── index.css               # estilos globales y variables del tema
    ├── data/
    │   ├── traducciones.js     # TODOS los textos en español e inglés
    │   └── contenido.js        # habilidades, proyectos, línea de tiempo y contacto
    └── components/
        ├── Encabezado.jsx          # navegación fija, selector ES/EN, tema y hero
        ├── SeccionHabilidades.jsx  # habilidades con barras de nivel
        ├── SeccionProyectos.jsx    # rejilla de tarjetas de proyecto
        ├── TarjetaProyecto.jsx     # una tarjeta (props: proyecto, t, idioma)
        ├── LineaTiempo.jsx         # trayectoria cronológica
        └── FormularioContacto.jsx  # formulario con validación y envío simulado
```

La regla de oro del proyecto: **los datos y los textos no viven dentro de los componentes**. Para añadir un proyecto, una habilidad o un evento de la trayectoria, solo hay que agregar un objeto en `src/data/contenido.js`; para cambiar un texto, se edita `src/data/traducciones.js` en los dos idiomas.

## Qué practica este proyecto

- **Internacionalización (i18n) sin librerías:** un objeto de traducciones por idioma, un estado `idioma` en el componente raíz y paso de textos por `props`. Incluye campos bilingües en los datos (`descripcionEs` / `descripcionEn`) para el contenido que no es interfaz.
- **Estado global sencillo con `useState` + `useEffect`:** sincronizar React con el navegador (atributo `data-tema`, atributo `lang`, título del documento) y persistir preferencias en `localStorage` con inicialización perezosa.
- **Componentización por secciones:** dividir una página grande en componentes pequeños con responsabilidades claras y comunicación solo por `props`.
- **Renderizado desde datos:** listas con `.map()` y `key` estable (`id`) para habilidades, proyectos, tecnologías y eventos de la línea de tiempo.
- **Formularios controlados y validación manual:** un solo objeto de estado, manejador genérico por `name`, validación por campo en `onBlur` y validación completa al enviar, mensajes de error accesibles (`aria-invalid`, `aria-describedby`, `role="alert"`) y máquina de estados simple para el envío simulado (`reposo → enviando → enviado`).
- **CSS con variables y temas:** cambiar todo el aspecto tocando un solo atributo, barras de progreso con ancho calculado desde datos, línea de tiempo con bordes y posicionamiento absoluto, y diseño responsive con Grid, Flexbox y media queries.
- **SEO y metadatos sociales:** cómo `description`, Open Graph y las tarjetas de Twitter controlan lo que ven buscadores y aplicaciones al compartir el enlace.
- **Accesibilidad básica:** HTML semántico, barras con `role="progressbar"`, botones con `aria-pressed`, foco visible y contraste cuidado en ambos temas.
