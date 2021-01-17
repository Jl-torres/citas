import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Formularios/formulario'
import Cita from './Listado-citas/citas'
import PropTypes from 'prop-types';
import './App.css';

function App() {

  //Almacenar citas en local Storage
   let citasIniciales = JSON.parse(localStorage.getItem('citas'));
   if(!citasIniciales) {
     citasIniciales=[]
   }
  //Guardar citas
  const [citas, guardarCitas] = useState(citasIniciales);
  //Agregar Citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
        cita
    ]);
  }
  //mensaje condicional

  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

  //useEffect
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas' , JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    };
  }, [citas, citasIniciales])

  //Funcion para eliminar citas

  const eliminarCita= id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  return (
    <Fragment>
     <h1 className="titulo-app">Administrador de Pacientes.</h1>
     <div className="container">
     <div className="row">
      
     <div className="cold-md-6">      
      <Formulario 
      crearCita={crearCita}/>
     </div>

     <div className="cold-md-6">
       <h2> {titulo}</h2>
       {citas.map(cita => (
          <Cita
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
          />
       ))}
    
     </div>

     </div>
     </div>
    </Fragment>
  );
}

Formulario.prototype={
  crearCita: PropTypes.func.isRequired
}



export default App;
