import React, { Fragment, useState, useEffect } from "react";
import Header from './Components/Header';
import Footer from './Components/Footer'
import Formulario from './Components/Formulario'
import Tabla from './Components/Tabla'
import Spinner from './Components/Spinner'
import Error from './Components/Error';
function App() {
  //Titulo para la pagina
  let title = "Registrar Mecanico";
   //useState para el objeto json a enviar y que se persista
   const [mecanico, guardarMecanico] = useState({
    id: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido:"",
    segundoApellido:"",
    celular:"",
    direccion:"",
    email: "",
    estado: 0,
  });
  const { id, primerNombre, segundoNombre, primerApellido, segundoApellido, celular, direccion, email, estado } = mecanico;
  //useState para guardar el tipo de identificacion
  const [tipoId, guardarTipoId] = useState('');
  //useState para el spinner
  const [cargando, guardarCarga] = useState(false);
  //useState para controlar el consumo
  const [consultar, guardarConsultar] = useState(false);
  //useState error der datos
  const [errorData, guardarErrorData] = useState(false);
  //useState para listado de mecanicos
  const [listaMecanico, guardarLista ] = useState([]);
   //useState para llenar la tabla
  const [cargar, guardarCargar ] = useState(false);
  //useEffect para las operaciones con el servicio
  useEffect(() => {    
    const consultarApi = async () => {
      const requestOptions = {
        method: "POST",        
        headers: { "Content-Type": "application/json" },        
        body: JSON.stringify({primerNombre,segundoNombre,primerApellido,segundoApellido,
          celular,direccion,email,estado,llaveMecanico:{id,tipoId}})
      };
      if (consultar) {           
        //Se inicia construccion o invocacion servicio
        const urlConsumo =
          "http://localhost:8090/api/carcenter/crearMecanico";
        const respuesta = await fetch(urlConsumo, requestOptions);
        await respuesta.json(); 
        if(respuesta.status == 500)
          guardarErrorData(true);
        else
         guardarErrorData(false);
                   
        guardarConsultar(false);
        
      }
      const urlListaMecanico = "http://localhost:8090/api/carcenter/obtenerMecanicos";
      const responseListaMecanico = await fetch(urlListaMecanico);
      const resultadoLista = await responseListaMecanico.json();        
      guardarLista(resultadoLista.dataInformation);
    };   
    consultarApi();
    //eslint-disable-next-line
  }, [consultar, cargar]);
  return (
    <Fragment>
      <Header title={title} />
      <div className="indigo darken-4">
      <Formulario 
        mecanico={mecanico}
        guardarTipoId={guardarTipoId}
        guardarMecanico={guardarMecanico}
        guardarCarga={guardarCarga}
        guardarConsultar={guardarConsultar}
      />
      </div>
      <div className="col m6 s12">{cargando ? <Spinner /> : null}</div>
      <div className="col m6 s12">{errorData ? <Error mensaje="El formato de correo no es correcto" />  : null}</div>
      <div class="card-panel teal lighten-2">
      <Tabla
         listaMecanico={listaMecanico}
         guardarCargar={guardarCargar}
      />   
      </div>
      <Footer/>
    </Fragment>
  );
}
export default App;
