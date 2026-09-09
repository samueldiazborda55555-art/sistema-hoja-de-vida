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

<<<<<<< HEAD

    const agregarExperiencia = () => {
        if (experienciaActual.empresa.trim() === "") {
            alert("Por favor completa el campo Empresa.");
            return;
        }

        if (experienciaActual.cargo.trim() === "") {
            alert("Por favor completa el campo Cargo.");
            return;
        }

        if (experienciaActual.tiempo.trim() === "") {
            alert("Por favor completa el campo Tiempo de Experiencia.");
            return;
        }

        if (experienciaActual.funciones.trim() === "") {
            alert("Por favor completa el campo Funciones desempeñadas.");
            return;
        }

        if (experienciaActual.habilidades.trim() === "") {
            alert("Por favor completa el campo Habilidades Técnicas.");
            return;
        }

        setPersona({...persona,experiencias: [...(persona.experiencias || []),experienciaActual]
=======
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

>>>>>>> dc5706495b5b4eb20480376135b982728a4e6523
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

<<<<<<< HEAD
        if (
            persona.experiencias &&
            persona.experiencias.length > 0
        ) {

            alert(
                "Las experiencias fueron capturadas correctamente."
            );

            if (siguiente) {
                siguiente();
            }

            return;
        }

        if (experienciaActual.empresa.trim() === "") {
            alert(
                "completa el campo Empresa."
            );
            return;
        }

        if (experienciaActual.cargo.trim() === "") {
            alert(
                "completa el campo Cargo."
            );
            return;
        }

        if (experienciaActual.tiempo.trim() === "") {
            alert(
                "completa el campo Tiempo de Experiencia."
            );
            return;
        }

        if (experienciaActual.funciones.trim() === "") {
            alert(
                "completa el campo Funciones desempeñadas."
            );
            return;
        }

        if (experienciaActual.habilidades.trim() === "") {
            alert(
                "completa el campo Habilidades Técnicas."
            );
=======
        if (!persona.experiencias || persona.experiencias.length === 0) {

            alert(
                "Agrega al menos una experiencia laboral."
            );

>>>>>>> dc5706495b5b4eb20480376135b982728a4e6523
            return;
        }

        alert(
<<<<<<< HEAD
            "presiona '+ Agregar Experiencia' antes de continuar"
        );
    };

    return (
        <div className="formulario">
            <h2>Experiencia Laboral</h2>
=======
            "Las experiencias fueron capturadas correctamente."
        );

        if (siguiente) {
            siguiente();
        }

    };

    return (

        <div className="formulario">

            <h2>Experiencia Laboral</h2>

>>>>>>> dc5706495b5b4eb20480376135b982728a4e6523
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

<<<<<<< HEAD
export default FormularioExperiencia;
=======
export default FormularioExperiencia;
>>>>>>> dc5706495b5b4eb20480376135b982728a4e6523
