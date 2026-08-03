import { useState } from "react";

function FormularioExperiencia({ anterior, siguiente }) {
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [funciones, setFunciones] = useState("");
  const [habilidades, setHabilidades] = useState("");

  const continuar = (e) => {
    e.preventDefault();

    console.log({
      empresa,
      cargo,
      tiempo,
      funciones,
      habilidades,
    });

    if (siguiente) {
      siguiente();
    }
  };

  return (
    <div className="formulario">
      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Empresa</label>
          <input
            type="text"
            placeholder="Nombre de la empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Cargo</label>
          <input
            type="text"
            placeholder="Cargo desempeñado"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>
          <input
            type="text"
            placeholder="Ejemplo: 1 año"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>
          <textarea
            rows="4"
            placeholder="Describe las funciones realizadas"
            value={funciones}
            onChange={(e) => setFunciones(e.target.value)}
          ></textarea>
        </div>

        <div className="grupo ancho">
          <label>Habilidades Técnicas</label>
          <textarea
            rows="4"
            placeholder="Ejemplo: HTML, CSS, JavaScript, React..."
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          ></textarea>
        </div>

        <div className="botones">
          <button type="button" onClick={anterior}>
            ← Anterior
          </button>

          <button type="submit">
            Vista Previa →
          </button>
        </div>

      </form>
    </div>
  );
}

export default FormularioExperiencia;