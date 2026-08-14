import { useState } from "react";

function FormularioAcademico({
    persona,
    setPersona,
    anterior,
    siguiente
}) {

    // Estado temporal para escribir un nuevo curso
    const [nuevoCurso, setNuevoCurso] = useState("");

    // Agregar curso
    const agregarCurso = () => {

        if (nuevoCurso.trim() === "") {
            alert("Por favor escribe el nombre del curso.");
            return;
        }

        setPersona({
            ...persona,
            cursos: [
                ...persona.cursos,
                nuevoCurso.trim()
            ]
        });

        setNuevoCurso("");
    };

    // Eliminar curso
    const eliminarCurso = (indice) => {

        const nuevosCursos = persona.cursos.filter(
            (_, i) => i !== indice
        );

        setPersona({
            ...persona,
            cursos: nuevosCursos
        });
    };

    // Continuar
    const enviar = (e) => {

        e.preventDefault();

        alert("Los datos fueron capturados correctamente.");

        if (siguiente) {
            siguiente();
        }
    };

    return (

        <div className="formulario">

            <h2>Información Académica</h2>

            <form onSubmit={enviar}>

                {/* NIVEL E INSTITUCIÓN */}

                <div className="fila">

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

                            <option value="">
                                Seleccione...
                            </option>

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

                </div>


                {/* TÍTULO Y AÑO */}

                <div className="fila">

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

                </div>


                {/* CURSOS */}

                <div className="grupo">

                    <label>Cursos Realizados</label>

                    <div className="agregar-curso">

                        <input
                            type="text"
                            placeholder="Escribe el nombre del curso"
                            value={nuevoCurso}
                            onChange={(e) =>
                                setNuevoCurso(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            className="btn-agregar"
                            onClick={agregarCurso}
                        >
                            + Agregar
                        </button>

                    </div>


                    {/* LISTA DE CURSOS */}

                    {persona.cursos.length > 0 && (

                        <div className="lista-cursos">

                            {persona.cursos.map((curso, indice) => (

                                <div
                                    className="curso-item"
                                    key={indice}
                                >

                                    <span>
                                        {curso}
                                    </span>

                                    <button
                                        type="button"
                                        className="btn-eliminar"
                                        onClick={() =>
                                            eliminarCurso(indice)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </div>

                            ))}

                        </div>

                    )}

                </div>


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

export default FormularioAcademico;