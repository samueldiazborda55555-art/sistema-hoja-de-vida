import { useState } from "react";
function FormularioDatos({ siguiente }) {
  
  //Estados del formulario
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [programa, setPrograma] = useState("");
  const [ficha, setFicha] = useState("");
  const [jornada, setJornada] = useState("Mañana");

  // Función del botón Continuar
  const continuar = (e) => {
  e.preventDefault();
  alert("Los datos fueron capturados correctamente.");
  siguiente();
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
          onChange={(e) => setFoto(e.target.files[0])}
        />
      </div>

      <div className="grupo">
        <label>Nombre Completo</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Edad</label>
        <input
          type="number"
          placeholder="Ingrese su edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Ciudad</label>
        <input
          type="text"
          placeholder="Ingrese su ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Programa de Formación</label>
        <input
          type="text"
          placeholder="Ejemplo: ADSO"
          value={programa}
          onChange={(e) => setPrograma(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="correo@misena.edu.co"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Número de Ficha</label>
        <input
          type="number"
          placeholder="Ingrese la ficha"
          value={ficha}
          onChange={(e) => setFicha(e.target.value)}
        />
      </div>

      <div className="grupo">
        <label>Jornada</label>

        <select
          value={jornada}
          onChange={(e) => setJornada(e.target.value)}
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