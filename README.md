# Portafolio personal — React

Sitio web de portafolio de **Carlos Destrades** construido con **React y Vite**:
una sola página con navegación por secciones, diseño responsive y modo oscuro.

## Características

- Secciones: **Sobre mí**, **Habilidades**, **Proyectos** y **Contacto**.
- **Modo oscuro / claro** con un botón; la elección se guarda en
  `localStorage` y se recuerda entre visitas.
- Diseño **responsive**: las tarjetas de proyectos se adaptan al ancho
  de la pantalla (rejilla CSS con `auto-fit`).
- Las listas de habilidades y proyectos se generan desde arreglos de
  datos con `.map()`: añadir un elemento es añadir una línea.
- Formulario de contacto sin servidor: abre el correo del visitante
  con el mensaje ya redactado (enlace `mailto:`).
- Datos de contacto: GitHub
  [nonenine6534](https://github.com/nonenine6534) ·
  carlosshelby950@gmail.com.

## Cómo ejecutarlo

Requisitos: tener instalado **Node.js 18 o superior**.

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev     # arranca el servidor de desarrollo
```

Después abre en el navegador la dirección que muestra Vite
(normalmente http://localhost:5173).

Para generar la versión de producción:

```bash
npm run build   # crea la carpeta dist/ lista para publicar
```

## Estructura del proyecto

```
portafolio/
├── index.html            # HTML base: aquí se monta la app (div#root)
├── package.json          # dependencias y scripts de npm
├── vite.config.js        # configuración de Vite + plugin de React
└── src/
    ├── main.jsx          # punto de entrada: monta <App />
    ├── App.jsx           # página completa y su estado (tema, formulario)
    ├── App.css           # estilos de los componentes
    ├── index.css         # estilos globales y variables del tema
    └── components/
        └── TarjetaProyecto.jsx   # tarjeta de un proyecto (props)
```

## Tecnologías y conceptos de React usados

- **React 18** con componentes funcionales y JSX.
- **Vite 5** como herramienta de desarrollo y empaquetado.
- **useState**: tema visual y formulario controlado (un solo objeto
  de estado con manejador genérico por `name`).
- **useEffect**: aplica el tema al `<html>` y lo persiste en
  `localStorage` cada vez que cambia.
- **Props** y renderizado de listas con `.map()` y `key`.
- Variables CSS (`--fondo`, `--texto`, ...) para cambiar todo el
  tema tocando un solo atributo.
