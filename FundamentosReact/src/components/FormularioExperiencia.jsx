import { useState } from "react";

function FormularioExperiencia({
    persona,
    setPersona,
    anterior,
    siguiente
}) {

    // Estado para escribir una función
    const [nuevaFuncion, setNuevaFuncion] = useState("");

    // Estado para escribir una habilidad
    const [nuevaHabilidad, setNuevaHabilidad] = useState("");

    // Estado temporal de la experiencia
    const [experienciaActual, setExperienciaActual] = useState({
        empresa: "",
        cargo: "",
        tiempo: "",
        funcion: [],
        habilidades: []
    });

    // Agregar función
    const agregarFuncion = () => {

        if (nuevaFuncion.trim() === "") {
            alert("Escribe el nombre de la función.");
            return;
        }

        setExperienciaActual({
            ...experienciaActual,
            funcion: [
                ...experienciaActual.funcion,
                nuevaFuncion.trim()
            ]
        });

        setNuevaFuncion("");
    };

    // Eliminar función
    const eliminarFuncion = (indice) => {

        const nuevasFunciones = experienciaActual.funcion.filter(
            (_, i) => i !== indice
        );

        setExperienciaActual({
            ...experienciaActual,
            funcion: nuevasFunciones
        });
    };

    // Agregar habilidad
    const agregarHabilidad = () => {

        if (nuevaHabilidad.trim() === "") {
            alert("Escribe una habilidad técnica.");
            return;
        }

        setExperienciaActual({
            ...experienciaActual,
            habilidades: [
                ...experienciaActual.habilidades,
                nuevaHabilidad.trim()
            ]
        });

        setNuevaHabilidad("");
    };

    // Eliminar habilidad
    const eliminarHabilidad = (indice) => {

        const nuevasHabilidades = experienciaActual.habilidades.filter(
            (_, i) => i !== indice
        );

        setExperienciaActual({
            ...experienciaActual,
            habilidades: nuevasHabilidades
        });
    };

    // Cambiar datos de la experiencia
    const actualizarExperiencia = (e) => {

        setExperienciaActual({
            ...experienciaActual,
            [e.target.name]: e.target.value
        });
    };

    // Agregar experiencia
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

        if (experienciaActual.funcion.length === 0) {
            alert("Agrega al menos una función.");
            return;
        }

        if (experienciaActual.habilidades.length === 0) {
            alert("Agrega al menos una habilidad técnica.");
            return;
        }

        setPersona({
            ...persona,
            experiencias: [
                ...(persona.experiencias || []),
                experienciaActual
            ]
        });

        setExperienciaActual({
            empresa: "",
            cargo: "",
            tiempo: "",
            funcion: [],
            habilidades: []
        });

        alert("Experiencia agregada correctamente.");
    };

    // Eliminar experiencia
    const eliminarExperiencia = (indice) => {

        const nuevasExperiencias = persona.experiencias.filter(
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
            alert("Debes agregar al menos una experiencia.");
            return;
        }

        siguiente();
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

                    <div className="agregar-funcion">

                        <input
                            type="text"
                            placeholder="Escribe una función"
                            value={nuevaFuncion}
                            onChange={(e) =>
                                setNuevaFuncion(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            className="btn-agregar"
                            onClick={agregarFuncion}
                        >
                            + Agregar
                        </button>

                    </div>

                    {experienciaActual.funcion.length > 0 && (

                        <div className="lista-funcion">

                            {experienciaActual.funcion.map(
                                (funcion, indice) => (

                                    <div
                                        className="funcion-item"
                                        key={indice}
                                    >

                                        <span>{funcion}</span>

                                        <button
                                            type="button"
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarFuncion(indice)
                                            }
                                        >
                                            Eliminar
                                        </button>

                                    </div>

                                )
                            )}

                        </div>

                    )}

                </div>

                {/* HABILIDADES */}
                <div className="grupo">

                    <label>Habilidades Técnicas</label>

                    <div className="agregar-funcion">

                        <input
                            type="text"
                            placeholder="Escribe una habilidad técnica"
                            value={nuevaHabilidad}
                            onChange={(e) =>
                                setNuevaHabilidad(e.target.value)
                            }
                        />

                        <button
                            type="button"
                            className="btn-agregar"
                            onClick={agregarHabilidad}
                        >
                            + Agregar
                        </button>

                    </div>

                    {experienciaActual.habilidades.length > 0 && (

                        <div className="lista-funcion">

                            {experienciaActual.habilidades.map(
                                (habilidad, indice) => (

                                    <div
                                        className="funcion-item"
                                        key={indice}
                                    >

                                        <span>{habilidad}</span>

                                        <button
                                            type="button"
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarHabilidad(indice)
                                            }
                                        >
                                            Eliminar
                                        </button>

                                    </div>

                                )
                            )}

                        </div>

                    )}

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

                            <h3>Experiencias Registradas</h3>

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
                                                <strong>Empresa:</strong>{" "}
                                                {experiencia.empresa}
                                            </p>

                                            <p>
                                                <strong>Tiempo:</strong>{" "}
                                                {experiencia.tiempo}
                                            </p>

                                            <p>
                                                <strong>Funciones:</strong>{" "}
                                                {experiencia.funcion.join(", ")}
                                            </p>

                                            <p>
                                                <strong>Habilidades:</strong>{" "}
                                                {experiencia.habilidades.join(", ")}
                                            </p>

                                        </div>

                                        <button
                                            type="button"
                                            className="btn-eliminar"
                                            onClick={() =>
                                                eliminarExperiencia(indice)
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