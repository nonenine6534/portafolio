import { useState } from 'react'

// ============================================================
// Componente FormularioContacto: formulario con validación
// propia (sin depender solo del HTML) y envío simulado.
//
// Estados que maneja:
//   valores  -> lo que escribe el visitante { nombre, correo, mensaje }
//   errores  -> mensaje de error por campo ('' si está bien)
//   estado   -> 'reposo' | 'enviando' | 'enviado'
//
// Reglas de validación:
//   nombre  -> mínimo 2 caracteres
//   correo  -> formato válido con expresión regular simple
//   mensaje -> mínimo 20 caracteres
//
// No hay backend: al enviar se simula la petición con
// setTimeout (1 segundo) y se muestra la confirmación.
// En un proyecto real, aquí iría un fetch() a una API.
// ============================================================

// Expresión regular sencilla para validar un correo:
// algo + @ + algo + . + algo, sin espacios.
const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const VALORES_INICIALES = { nombre: '', correo: '', mensaje: '' }

export default function FormularioContacto({ t }) {
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState('reposo')

  // Valida UN campo y devuelve su mensaje de error ('' si ok).
  // Se usa al salir del campo (onBlur) y al enviar todo.
  function validarCampo(nombreCampo, valor) {
    if (nombreCampo === 'nombre') {
      return valor.trim().length >= 2 ? '' : t.errorNombre
    }
    if (nombreCampo === 'correo') {
      return REGEX_CORREO.test(valor.trim()) ? '' : t.errorCorreo
    }
    if (nombreCampo === 'mensaje') {
      return valor.trim().length >= 20 ? '' : t.errorMensaje
    }
    return ''
  }

  // Valida todos los campos y devuelve el objeto de errores.
  function validarTodo() {
    return {
      nombre: validarCampo('nombre', valores.nombre),
      correo: validarCampo('correo', valores.correo),
      mensaje: validarCampo('mensaje', valores.mensaje),
    }
  }

  // Manejador genérico: actualiza el campo según su "name"
  // y limpia su error mientras el visitante corrige.
  function cambiarCampo(evento) {
    const { name, value } = evento.target
    setValores((anterior) => ({ ...anterior, [name]: value }))
    setErrores((anterior) => ({ ...anterior, [name]: '' }))
  }

  // Al salir de un campo, se valida solo ese campo:
  // el visitante recibe el aviso sin esperar al envío.
  function salirCampo(evento) {
    const { name, value } = evento.target
    setErrores((anterior) => ({ ...anterior, [name]: validarCampo(name, value) }))
  }

  function enviarMensaje(evento) {
    evento.preventDefault()

    const erroresActuales = validarTodo()
    setErrores(erroresActuales)

    // Si algún campo tiene error, no se envía nada.
    const hayErrores = Object.values(erroresActuales).some((error) => error !== '')
    if (hayErrores) return

    // Envío simulado: 1 segundo de espera y confirmación.
    setEstado('enviando')
    setTimeout(() => {
      setEstado('enviado')
      setValores(VALORES_INICIALES)
    }, 1000)
  }

  // Vista de éxito: sustituye el formulario por la confirmación.
  if (estado === 'enviado') {
    return (
      <div className="form-exito" role="status">
        <h3>{t.exitoTitulo}</h3>
        <p>{t.exitoTexto}</p>
        <button
          type="button"
          className="boton boton-secundario"
          onClick={() => setEstado('reposo')}
        >
          {t.enviarOtro}
        </button>
      </div>
    )
  }

  return (
    <form className="form-contacto" onSubmit={enviarMensaje} noValidate>
      <div className="campo">
        <label htmlFor="campo-nombre">{t.formNombre}</label>
        <input
          id="campo-nombre"
          name="nombre"
          type="text"
          placeholder={t.formNombrePlaceholder}
          value={valores.nombre}
          onChange={cambiarCampo}
          onBlur={salirCampo}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p className="campo-error" id="error-nombre" role="alert">{errores.nombre}</p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="campo-correo">{t.formCorreo}</label>
        <input
          id="campo-correo"
          name="correo"
          type="email"
          placeholder={t.formCorreoPlaceholder}
          value={valores.correo}
          onChange={cambiarCampo}
          onBlur={salirCampo}
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={errores.correo ? 'error-correo' : undefined}
        />
        {errores.correo && (
          <p className="campo-error" id="error-correo" role="alert">{errores.correo}</p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="campo-mensaje">{t.formMensaje}</label>
        <textarea
          id="campo-mensaje"
          name="mensaje"
          rows="5"
          placeholder={t.formMensajePlaceholder}
          value={valores.mensaje}
          onChange={cambiarCampo}
          onBlur={salirCampo}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
        {/* Contador de caracteres: ayuda a cumplir el mínimo */}
        <p className="campo-ayuda">{valores.mensaje.trim().length} / 20</p>
        {errores.mensaje && (
          <p className="campo-error" id="error-mensaje" role="alert">{errores.mensaje}</p>
        )}
      </div>

      <button type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? t.formEnviando : t.formEnviar}
      </button>
    </form>
  )
}
