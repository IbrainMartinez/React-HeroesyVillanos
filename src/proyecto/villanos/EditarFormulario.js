import React, { useState, useEffect } from 'react'

const EditarFormulario = (props) => {
const [usuario, setUsuario] = useState(props.EstadoUsuario)
  
useEffect(() => {
    setUsuario(props.EstadoUsuario)
}, [props])
 
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUsuario({ ...usuario, [name]: value })
  }

  return (
    <section className='container'>
        <form
      onSubmit={(event) => {
        event.preventDefault()

        props.ActualizarUsuario(usuario.id, usuario)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="nombreReal" value={usuario.nombreReal} onChange={handleInputChange} required/>

      <label>Usuario</label>
      <input type="text" name="nombreSuperheore" value={usuario.nombreSuperheore} onChange={handleInputChange} required />

      <label>Edad</label>
      <input type="number" name="edad" value={usuario.edad} onChange={handleInputChange} required/>

      <label>Ciudad</label>
      <input type="text" name="ciudad" value={usuario.ciudad} onChange={handleInputChange} required />

      <label>Estado</label>
      <input type="text" name="estado" value={usuario.estado} onChange={handleInputChange} required/>

      <label>Codigo Postal</label>
      <input type="text" name="codigoPostal" value={usuario.codigoPostal} onChange={handleInputChange} required />

      <label>Afiliacion</label>
      <input type="text" name="Afiliacion" value={usuario.Afiliacion} onChange={handleInputChange} required />

      <label>Enemigo</label>
      <input type="text" name="enemigo" value={usuario.enemigo} onChange={handleInputChange} required />

      <label>Descripcion</label>
      <textarea type="text" name="Descripcion" value={usuario.Descripcion} onChange={handleInputChange} required ></textarea>
    
      <button>Actualizar</button>
      <button onClick={() => props.setEditar(false)} className="button muted-button"> Cancelar </button>
    </form>

    </section> 
    
  )
}

export default EditarFormulario;