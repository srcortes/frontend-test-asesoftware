import React, {Fragment} from 'react';
import {mecanicoLibre} from '../Helper';
const Tabla = ({ listaMecanico, guardarCargar}) => {
    return(
      <Fragment>
        {guardarCargar(true)}
        <table className="striped">
        <thead>
          <tr>
              <th>Nombres Completos</th>
              <th>#Celular</th>
              <th>Email</th>
              <th>Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
        {listaMecanico.map((j) => (
                  <tr className={mecanicoLibre(j.estado)}>
                    <td>{j.primerNombre+"  "+j.primerApellido}</td>
                    <td>{j.celular} </td>
                    <td>{j.email}</td> 
                    <td>{j.estado === 0 ? "Libre" : "Ocupado"}</td>                  
                  </tr>
                ))}
        </tbody>
      </table>
      </Fragment>
    );
}
export default Tabla;