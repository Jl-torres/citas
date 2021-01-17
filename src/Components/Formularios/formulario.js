import React, {Fragment, useState} from 'react';
import './formulario.css';
import {v4 as uuidv4} from 'uuid';


const Formulario = ({crearCita}) => {

    //States    
   const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    });

    const [error, actualizarError]=useState(false)

    //Funcion

    const actualizarState = e => {
        actualizarCita({
         ...cita,
         [e.target.name]: e.target.value
        })
    }

    //Valores
    
    const{mascota, propietario, fecha, hora, sintomas}= cita

    //Agregar Cita

    const submitCita = e => {
        e.preventDefault();
       //Validacion
       if(
        mascota.trim() === '' ||
        propietario.trim() === '' ||
        fecha.trim() === '' ||
        hora.trim() === '' ||
        sintomas.trim() === '' 
        )
       {
           actualizarError(true);
           return;
       } 

       actualizarError(false);

      //Id
       cita.id= uuidv4(); 
      //Crear Cita
       crearCita(cita);
     //actualizar Cita
     actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
     })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2> 

            {error ? 
            <p className="alerta"> TODOS LOS CAMPOS SON OBLIGATORIOS</p>
          : null}
           
            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                type="text"
                name="mascota"
                placeholder="Nombre Mascota"
                className="input"
                onChange={actualizarState}
                value={mascota}
                />

            <label>Nombre del Dueño</label>
                <input
                type="text"
                name="propietario"
                placeholder="Nombre del Dueño"
                className="input"
                onChange={actualizarState}
                value={propietario}
                /> 

         <label>Fecha</label>
                <input
                type="date"
                name="fecha"
                className="input"
                onChange={actualizarState}
                value={fecha}
                /> 

             <label>Hora</label>
                <input
                type="time"
                name="hora"
                className="input"
                onChange={actualizarState}
                value={hora}
                /> 

            <label>Sintomas</label>
            <textarea
            className="input textarea"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas} >   
            </textarea>
            <button 
            type="submit"
            className="boton-formulario">
                Agregar Cita
            </button >
        

            </form>
        </Fragment>
    );
}

/*formulario.propTypes = {
    
};*/

export default Formulario;



