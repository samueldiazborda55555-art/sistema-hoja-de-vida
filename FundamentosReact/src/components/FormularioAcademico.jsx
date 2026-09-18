import { useState } from "react";

function FormularioAcademico({ persona, setPersona, anterior, siguiente }) {

const [nuevoCurso, setNuevoCurso] = useState("");

const agregarCurso = () => {
if (nuevoCurso.trim() === "") {
alert("Por favor escribe el nombre del curso");
return;
}


setPersona({
  ...persona,
  cursos: [...persona.cursos, nuevoCurso.trim()]
});

setNuevoCurso("");


};

const eliminarCurso = (indice) => {
const nuevosCursos = persona.cursos.filter(
(_, i) => i !== indice
);


setPersona({
  ...persona,
  cursos: nuevosCursos
});


};

const enviar = (e) => {
e.preventDefault();


if (persona.nivel.trim() === "") {
  alert("Ingresar nivel de formación");
  return;
}

if (persona.institucion.trim() === "") {
  alert("Ingresar institución educativa");
  return;
}

if (persona.titulo.trim() === "") {
  alert("Ingresar título obtenido");
  return;
}

if (persona.anio.trim() === "") {
  alert("Ingresar año de graduación");
  return;
}

if (persona.cursos.length === 0) {
  alert("Ingresar cursos realizados");
  return;
}

siguiente();


};

return ( <div className="formulario">


  <h2>Información Académica</h2>

  <form onSubmit={enviar}>

    <div className="grupo">
      <label>Nivel de Formación</label>

      <select
        value={persona.nivel}
        onChange={(e) =>
          setPersona({
            ...persona,
            nivel: e.target.value
          })
        }
      >
        <option value="">Seleccione...</option>
        <option>Técnico</option>
        <option>Tecnólogo</option>
        <option>Universitario</option>
        <option>Especialización</option>
        <option>Maestría</option>
        <option>Doctorado</option>
      </select>
    </div>

    <div className="grupo">
      <label>Institución Educativa</label>

      <input
        type="text"
        placeholder="Ingrese la institución"
        value={persona.institucion}
        onChange={(e) =>
          setPersona({
            ...persona,
            institucion: e.target.value
          })
        }
      />
    </div>

    <div className="grupo">
      <label>Título Obtenido</label>

      <input
        type="text"
        placeholder="Ingrese el título"
        value={persona.titulo}
        onChange={(e) =>
          setPersona({
            ...persona,
            titulo: e.target.value
          })
        }
      />
    </div>

    <div className="grupo">
      <label>Año de Graduación</label>

      <input
        type="number"
        placeholder="Ejemplo: 2025"
        value={persona.anio}
        onChange={(e) =>
          setPersona({
            ...persona,
            anio: e.target.value
          })
        }
      />
    </div>

    <div className="grupo">
      <label>Curso Realizado</label>

      <input
        type="text"
        placeholder="Ingrese el nombre del curso"
        value={nuevoCurso}
        onChange={(e) => setNuevoCurso(e.target.value)}
      />

      <button
        type="button"
        onClick={agregarCurso}
      >
        + Agregar Curso
      </button>
    </div>

    {persona.cursos.length > 0 && (
      <div className="lista-cursos">

        <h3>Cursos Registrados</h3>

        {persona.cursos.map((curso, indice) => (
          <div className="curso-item" key={indice}>

            <span>{curso}</span>

            <button
              type="button"
              onClick={() => eliminarCurso(indice)}
            >
              Eliminar
            </button>

          </div>
        ))}

      </div>
    )}

    <div className="botones">

      <button
        type="button"
        onClick={anterior}
      >
        ← Anterior
      </button>

      <button type="submit">
        Siguiente →
      </button>

    </div>

  </form>

</div>

);
}

export default FormularioAcademico;