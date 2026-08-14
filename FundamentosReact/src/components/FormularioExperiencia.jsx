import { useState } from "react";

function FormularioExperiencia({
    persona,
    setPersona,
    anterior,
    siguiente
}) {

    // Estado temporal para la experiencia que se está escribiendo
    const [experienciaActual, setExperienciaActual] = useState({
        empresa: "",
        cargo: "",
        tiempo: "",
        funciones: "",
        habilidades: ""
    });

    // Cambiar los datos de la experiencia actual
    const actualizarExperiencia = (e) => {

        setExperienciaActual({
            ...experienciaActual,
            [e.target.name]: e.target.value
        });

    };

    // Agregar experiencia
    const agregarExperiencia = () => {

        if (
            experienciaActual.empresa.trim() === "" ||
            experienciaActual.cargo.trim() === ""
        ) {

            alert(
                "Por favor completa como mínimo la empresa y el cargo."
            );

            return;
        }

        setPersona({
            ...persona,

            experiencias: [
                ...(persona.experiencias || []),
                experienciaActual
            ]

        });

        // Limpiar formulario
        setExperienciaActual({
            empresa: "",
            cargo: "",
            tiempo: "",
            funciones: "",
            habilidades: ""
        });

    };

    // Eliminar experiencia
    const eliminarExperiencia = (indice) => {

        const nuevasExperiencias =
            (persona.experiencias || []).filter(
                (_, i) => i !== indice
            );

        setPersona({

            ...persona,

            experiencias: nuevasExperiencias

        });

    };

    // Continuar
    const enviar = (e) => {

        e.preventDefault();

        if (!persona.experiencias || persona.experiencias.length === 0) {

            alert(
                "Agrega al menos una experiencia laboral."
            );

            return;
        }

        alert(
            "Las experiencias fueron capturadas correctamente."
        );

        if (siguiente) {
            siguiente();
        }

    };

    return (

        <div className="formulario">

            <h2>Experiencia Laboral</h2>

            <form onSubmit={enviar}>

                {/* EMPRESA */}

                <div className="grupo">

                    <label>Empresa</label>

                    <input
                        type="text"
                        name="empresa"
                        placeholder="Nombre de la empresa"
                        value={experienciaActual.empresa}
                        onChange={actualizarExperiencia}
                    />

                </div>

                {/* CARGO */}

                <div className="grupo">

                    <label>Cargo</label>

                    <input
                        type="text"
                        name="cargo"
                        placeholder="Cargo desempeñado"
                        value={experienciaActual.cargo}
                        onChange={actualizarExperiencia}
                    />

                </div>

                {/* TIEMPO */}

                <div className="grupo">

                    <label>Tiempo de Experiencia</label>

                    <input
                        type="text"
                        name="tiempo"
                        placeholder="Ejemplo: 1 año"
                        value={experienciaActual.tiempo}
                        onChange={actualizarExperiencia}
                    />

                </div>

                {/* FUNCIONES */}

                <div className="grupo">

                    <label>Funciones desempeñadas</label>

                    <textarea
                        rows="4"
                        name="funciones"
                        placeholder="Describa las funciones realizadas"
                        value={experienciaActual.funciones}
                        onChange={actualizarExperiencia}
                    ></textarea>

                </div>

                {/* HABILIDADES */}

                <div className="grupo">

                    <label>Habilidades Técnicas</label>

                    <textarea
                        rows="4"
                        name="habilidades"
                        placeholder="Ejemplo: HTML, CSS, JavaScript, React..."
                        value={experienciaActual.habilidades}
                        onChange={actualizarExperiencia}
                    ></textarea>

                </div>

                {/* AGREGAR EXPERIENCIA */}

                <button
                    type="button"
                    className="btn-agregar-experiencia"
                    onClick={agregarExperiencia}
                >
                    + Agregar Experiencia
                </button>

                {/* EXPERIENCIAS REGISTRADAS */}

                {persona.experiencias &&
                    persona.experiencias.length > 0 && (

                        <div className="lista-experiencias">

                            <h3>
                                Experiencias Registradas
                            </h3>

                            {persona.experiencias.map(
                                (experiencia, indice) => (

                                    <div
                                        className="experiencia-item"
                                        key={indice}
                                    >

                                        <div className="experiencia-info">

                                            <h4>
                                                {experiencia.cargo}
                                            </h4>

                                            <p>
                                                <strong>
                                                    Empresa:
                                                </strong>{" "}
                                                {experiencia.empresa}
                                            </p>

                                            <p>
                                                <strong>
                                                    Tiempo:
                                                </strong>{" "}
                                                {experiencia.tiempo}
                                            </p>

                                            <p>
                                                <strong>
                                                    Funciones:
                                                </strong>{" "}
                                                {experiencia.funciones}
                                            </p>

                                            <p>
                                                <strong>
                                                    Habilidades:
                                                </strong>{" "}
                                                {experiencia.habilidades}
                                            </p>

                                        </div>

                                        <button
                                            type="button"
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarExperiencia(
                                                    indice
                                                )
                                            }
                                        >
                                            Eliminar
                                        </button>

                                    </div>

                                )
                            )}

                        </div>

                    )}

                {/* BOTONES */}

                <div className="botones">

                    <button
                        type="button"
                        className="btn-anterior"
                        onClick={anterior}
                    >
                        ← Anterior
                    </button>

                    <button
                        type="submit"
                        className="btn-siguiente"
                    >
                        Siguiente →
                    </button>

                </div>

            </form>

        </div>

    );
}

export default FormularioExperiencia;