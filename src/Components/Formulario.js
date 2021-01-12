import React, { Fragment, useState } from 'react'
import styled from "@emotion/styled";
import useSelect from '../Hooks/useSelect'
import Error from './Error';

const InputId = styled.input`
  width: 100% !important;
  color: #000000;
`;

const Formulario = ({ mecanico, guardarTipoId, guardarMecanico, guardarCarga, guardarConsultar }) => {
    const { id, primerNombre, segundoNombre, primerApellido, segundoApellido, celular, direccion, email } = mecanico;
    const OPCIONES = [
        { value: 'CC', label: 'Cedula Ciudadania' },
        { value: 'P', label: 'Pasaporte' },
        { value: 'CE', label: 'Cedula Extrajenria' },
    ];
    //invocamos nuestro Hook
    const [tipoId, SelectTipoId] = useSelect('CC', OPCIONES);
    //useState para el control de que los campos ingresados no queden vacios
    const [error, guardarError] = useState(false);
    //copiando los valores de los input
    const handleChange = (e) => {
        guardarMecanico({
            ...mecanico,
            [e.target.name]: e.target.value,
        })
    };
    //submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const { estado,  celular, correoElectronico, direccion, id, 
            primerApellido, primerNombre, segundoApellido, segundoNombre } = mecanico;
        if (id === 0 || primerNombre === "" || primerApellido === "" || celular === "" || email === "") {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarTipoId(tipoId);
        guardarCarga(true);
        setTimeout(() =>{
            guardarCarga(false);  
            guardarConsultar(true);               
          },5000)
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <div className="row">
                    <div className="input-field col s2">
                        <SelectTipoId />
                    </div>
                    <div className="input-field col s2 ">
                        <input
                            type="number"
                            name="id"
                            id="id"
                            value={id}
                            required="true"
                            onChange={handleChange}
                        />
                        <label htmlFor="id"># Identificación:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s2 ">
                        <input
                            type="text"
                            name="primerNombre"
                            id="primerNombre"
                            value={primerNombre}
                            required="true"
                            onChange={handleChange}
                        />
                        <label htmlFor="primerNombre">Primer Nombre:</label>
                    </div>
                    <div className="input-field col s2 ">
                        <input
                            type="text"
                            name="segundoNombre"
                            id="segundoNombre"
                            value={segundoNombre}
                            onChange={handleChange}
                        />
                        <label htmlFor="segundoNombre">Segundo Nombre:</label>
                    </div>
                    <div className="input-field col s2 ">
                        <input
                            type="text"
                            name="primerApellido"
                            id="primerApellido"
                            value={primerApellido}
                            required="true"
                            onChange={handleChange}
                        />
                        <label htmlFor="primerApellido">Primer Apellido:</label>
                    </div>
                    <div className="input-field col s2 ">
                        <input
                            type="text"
                            name="segundoApellido"
                            id="segundoApellido"
                            value={segundoApellido}
                            onChange={handleChange}
                        />
                        <label htmlFor="segundoApellido">Segundo Apellido:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s2 ">
                        <InputId
                            type="number"
                            name="celular"
                            id="celular"
                            value={celular}
                            required="true"
                            onChange={handleChange}
                        />
                        <label htmlFor="celular">N° Celular:</label>
                    </div>
                    <div className="input-field col s2 ">
                        <InputId
                            type="text"
                            name="direccion"
                            id="direccion"
                            value={direccion}
                            onChange={handleChange}
                        />
                        <label htmlFor="direccion">Direccion Domicilio:</label>
                    </div>
                    <div className="input-field col s2 ">
                        <InputId
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            required="true"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Correo Electronico</label>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="submit"
                                value="Guardar Mecanico"
                                className="waves-effect waves-light btn-large btn-block  red accent-4"
                            />
                        </div>
                    </div>
                </div>
                </form>
        </Fragment >
            );
        }
export default Formulario;