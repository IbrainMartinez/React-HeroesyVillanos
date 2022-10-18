
const TablaUsuario = (props) =>{

    const {listaUsuarios} = props;
 
    return(<>  
        <h1>Tabla de Villanos</h1>
        <table className="container">
            <thead>
                <tr>
                    <th>Nombre Real</th>
                    <th>Nombre Superheroe</th>
                    <th>Edad</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>Codigo postal</th>
                    <th>Afiliacion</th>
                    <th>Enemigo</th>
                    <th>Descripcion</th>
                    <th colSpan={2}>Opciones</th>
                </tr>
            </thead>

            <body>
 
                {
                    listaUsuarios.length == 0 ? (
                        <tr>
                            <td colSpan={2}>No hay Datos</td>
                        </tr>

                ) : (listaUsuarios.map((usuario) =>(
                        <tr key={usuario.id}>
                            <td>{usuario.nombreReal}</td>
                            <td>{usuario.nombreSuperheore}</td>
                            <td>{usuario.edad}</td>
                            <td>{usuario.ciudad}</td>
                            <td>{usuario.estado}</td>
                            <td>{usuario.codigoPostal}</td>
                            <td>{usuario.Afiliacion}</td>
                            <td>{usuario.enemigo}</td>
                            <td >{usuario.Descripcion}</td>
                            
                            <td>
                            <button
                        onClick={() => {
                            props.editarUsuario(usuario)
                        }}
                            className="button muted-button">
                                Editar
                    </button>

                    <button onClick={() => 
                        props.deleteUser(usuario.id )} className="button muted-button">
                                Eliminar
                    </button>
                                </td>
                            </tr>
                        )))
                    }
                    
                </body>
            </table>
        </>
    )
};

export default TablaUsuario;