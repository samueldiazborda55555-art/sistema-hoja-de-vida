import { useState } from "react";
function FormularioDatos({ persona, setPersona, siguiente }) {
  

  // Función del botón Continuar
  const continuar = (e) => {
    e.preventDefault();
    alert("Los datos fueron capturados correctamente.");

    if (siguiente) {
      siguiente();
    }
  };


  return (
  <div className="formulario">

    <h2>Registro de Aprendices</h2>

    <form onSubmit={continuar}>

      <div className="grupo">
        <label>Fotografía</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPersona({...persona, foto: e.target.files[0]})}
        />
      </div>

      <div className="grupo">
        <label>Nombre Completo</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={persona.nombre}
          onChange={(e) => setPersona({...persona,nombre: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Edad</label>
        <input
          type="number"
          placeholder="Ingrese su edad"
          value={persona.edad}
          onChange={(e) => setPersona({...persona,edad: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Ciudad</label>
        <input
          type="text"
          placeholder="Ingrese su ciudad"
          value={persona.ciudad}
          onChange={(e) => setPersona({...persona,ciudad: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Programa de Formación</label>
        <input
          type="text"
          placeholder="Ejemplo: ADSO"
          value={persona.programa}
          onChange={(e) => setPersona({...persona,programa: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="correo@misena.edu.co"
          value={persona.correo}
          onChange={(e) => setPersona({...persona,correo: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Número de Ficha</label>
        <input
          type="number"
          placeholder="Ingrese la ficha"
          value={persona.ficha}
          onChange={(e) => setPersona({...persona,ficha: e.target.value})}
        />
      </div>

      <div className="grupo">
        <label>Jornada</label>

        <select
          value={persona.jornada}
          onChange={(e) => setPersona({...persona,jornada: e.target.value})}
        >
          <option>Mañana</option>
          <option>Tarde</option>
          <option>Noche</option>
          <option>Mixta</option>
        </select>
      </div>

      <button type="submit">
        Continuar registro
      </button>

    </form>

  </div>
);
}

export default FormularioDatos