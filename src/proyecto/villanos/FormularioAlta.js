import { useState } from "react";


    const afilicacion={
        marvel: "Marvel",
        DCcomics:"DC", 
    }

    const enemigovillano={
        Enememigo1: "Superman",
        Enememigo2:"Atman",
        Enememigo3:"Flash",
        Enememigo4:"Ironman",
        Enememigo5:"Thor"
    }


const FormularioAlta= (props) =>{


    const estadoInicial = {id: null, nombreReal:'',nombreSuperheore:'',edad: '',ciudad:'',estado:'',codigoPostal:'',Afiliacion:'',enemigo:'',Descripcion:''};
    
    const [usuario, setUsuario] = useState(estadoInicial);

//  el handleInputChange sirve para guardar datos en memoria
    const handleInputChange = (event) =>{
        
        setUsuario({
            ...usuario,[event.target.name] : event.target.value
        });  
    }   

    const guardarDatos=(event)=>{
        event.preventDefault();
        console.log(usuario);

        if (!usuario.nombreReal || !usuario.nombreSuperheore || !usuario.edad || !usuario.ciudad || !usuario.estado || !usuario.codigoPostal || !usuario.Afiliacion || !usuario.Descripcion) return //nuevo

        props.addUsuario(usuario);
        setUsuario(estadoInicial) //nuevo
    }

    return (
        <section className="container">
            <form onSubmit={guardarDatos}>
                <label for="">Nombre Real</label>
                <input type="text" placeholder="Nombre Real"  onChange={handleInputChange} name='nombreReal' value={usuario.nombreReal} required/>  
                <label for="">Nombre Superheroe</label>
                <input type="text" placeholder="Nombre Superheroe"  onChange={handleInputChange} name='nombreSuperheore' value={usuario.nombreSuperheore} required/>
                <label for="">Edad</label>
                <input type="number" placeholder="Edad"  onChange={handleInputChange} name='edad' value={usuario.edad} required/>
                <label for="">Ciudad</label>
                <input type="text" placeholder="Ciudad"  onChange={handleInputChange} name='ciudad' value={usuario.ciudad} required/>
                <label for="">Estado</label>
                <input type="text" placeholder="Estado"  onChange={handleInputChange} name='estado' value={usuario.estado} required/>

                <label for="">Codigo postal</label>
                <input type="number" placeholder="Codigo postal" maxLength={5} onChange={handleInputChange} name='codigoPostal' value={usuario.codigoPostal} required/>

                <label for="">Afiliacion</label>
                <select placeholder="Afiliacion"  onChange={handleInputChange} name='Afiliacion' value={usuario.Afiliacion} required>
                    <opcion selected>Afilicacion</opcion>
                    <option>Seleccionar</option>
                    <option>{afilicacion.marvel} </option>
                    <option>{afilicacion.DCcomics}</option>
                </select>

                <label for="">Enemigo</label>
                <select placeholder="enemigo"  onChange={handleInputChange} name='enemigo' value={usuario.enemigo} required>
                    <opcion selected>Afilicacion</opcion>
                    <option>Seleccionar</option>
                    <option>{enemigovillano.Enememigo1} </option>
                    <option>{enemigovillano.Enememigo2}</option>
                    <option>{enemigovillano.Enememigo3} </option>
                    <option>{enemigovillano.Enememigo4}</option>
                    <option>{enemigovillano.Enememigo5} </option>
                </select>

                <label for="">Descripcion</label>
                <textarea type="text" placeholder="Descripcion" onChange={handleInputChange} name='Descripcion' value={usuario.Descripcion} required/>
  
                <input type="submit" value="enviar" /> 
            </form>
            
        </section>
    )
};

export default FormularioAlta;