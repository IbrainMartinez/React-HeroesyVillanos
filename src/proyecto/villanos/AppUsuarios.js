import { useState } from "react";
import FormularioAlta from "./FormularioAlta"
import TablaUsuario from "./TablaUsuario"
import EditarFormulario from "./EditarFormulario"

const Villanos = () =>{
 
    const UsuariosData =[
        {id: 1,
        nombreReal:'Ibrain', 
        nombreSuperheore:'Batman',
        edad:'26',
        ciudad:"Mexico",
        estado:"campeche",
        codigoPostal:"24040",
        Afiliacion:"Marvel",
        enemigo:"Anthony",
        Descripcion:"Mi superpoder es explotar ranas"},

        {id: 2, 
        nombreReal:'christopher',
        nombreSuperheore:'flash',
        edad:'26',
        ciudad:"Mexico",
        estado:"campeche",
        codigoPostal:"24040",
        Afiliacion:"Marvel",
        enemigo:"De la cruz",
        Descripcion:"Mi superpoder es explotar ranas"},
    ];
     
    const[listaUsuarios, setListaUsuario] = useState(UsuariosData);
    const [editar, setEditar] = useState(false) //nuevo
    const estadoInicial ={id: null, nombreReal:'',nombreSuperheore:'',edad: '',ciudad:'',estado:'',codigoPostal:'',Afiliacion:'',enemigo:'',Descripcion:''} //nuevo
    const [EstadoUsuario, setEstadoUsuario] = useState(estadoInicial) //nuevo

    //agregar usuario //no
    const addUsuario = (objetoUsuario) =>{
        objetoUsuario.id  = listaUsuarios.length + 1
        setListaUsuario([...listaUsuarios, objetoUsuario])     
    }

    //eliminacion usuario //funciona
    const deleteUser = (id) => {

        setListaUsuario(listaUsuarios.filter((objetoUsuario) => objetoUsuario.id !== id))
      }

    //edicion usuario //no
    const editarUsuario = (usuario) =>{

        setEditar(true);
        setEstadoUsuario({  

          id: usuario.id, 
          nombreReal: usuario.nombreReal, 
          nombreSuperheore: usuario.nombreSuperheore,
          edad: usuario.edad, 
          ciudad: usuario.ciudad,
          estado: usuario.estado, 
          codigoPostal: usuario.codigoPostal,
          Afiliacion: usuario.Afiliacion, 
          enemigo: usuario.enemigo,
          Descripcion: usuario.Descripcion
        
        })
      }

    //actualizacion usuario
    const ActualizarUsuario = (id, ActualizarUsuario) => {
        setEditar(false)
        setListaUsuario(listaUsuarios.map((usuario) => (usuario.id === id ? ActualizarUsuario : usuario)))
      }

    return (
    <main className="container">
        <section className="flex-row">
            <section className="flex-large">
            <br></br>
            {editar ? (
						<div className="container">
							<h2>Editar Villano</h2>
                <EditarFormulario 
                  editar={editar}
                  setEditar={setEditar}
                  EstadoUsuario={EstadoUsuario}
                  ActualizarUsuario={ActualizarUsuario}
                />
						</div>
					) : (
						<div className="container">
              <br></br>
              <br></br>
							<h2>Agregar Villano</h2>
                <FormularioAlta addUsuario={addUsuario}/>
                <br></br>
						</div>
					)}

            </section>
            <section className="flex-large">
              <br></br>
              <br></br>
                <TablaUsuario listaUsuarios={listaUsuarios}  deleteUser={deleteUser} editarUsuario={editarUsuario}/>
                <br></br>
            </section>
        </section>
    </main>
    )
};
export default Villanos;