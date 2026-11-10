import { useState } from "react";

// Rutas corregidas apuntando a la carpeta assets
import Header from "./assets/components/Header";
import FormacionAcademica from "./assets/components/FormularioAcademico";
import FormularioDatos from "./assets/components/FormularioDatos";
import ExperienciaLaboral from "./assets/components/FormularioExperiencia";
import VistaPrevia from "./assets/components/VistaPrevia";
import Footer from "./assets/components/Footer";

import "./App.css";

function App() {
    const [paso, setPaso] = useState(1);

    // Datos compartidos
    const [persona, setPersona] = useState({
        // Datos personales
        foto: null,
        nombre: "",
        edad: "",
        ciudad: "",
        correo: "",
        programa: "",
        ficha: "",
        jornada: "Mañana",

        // Formación académica
        nivel: "",
        institucion: "",
        titulo: "",
        anio: "",

        cursos: [],

        // Experiencia laboral
        experiencias: [],
    });

    // Guardar hoja de vida
    const guardarHojavida = async () => {
        try {
            const datosapi = {
                nombre: persona.nombre,
                edad: persona.edad,
                ciudad: persona.ciudad,
                correo: persona.correo,
                fotografia: null,
                programa: persona.programa,
                ficha: persona.ficha,
                jornada: persona.jornada,
            };

            const respuesta = await fetch(
                "http://127.0.0.1:5000/api/registrohv",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datosapi),
                }
            );

            const resultado = await respuesta.json();

            console.log("Respuesta realizada:", resultado);

            if (!respuesta.ok) {
                alert(resultado.mensaje || "Error al guardar la hoja de vida");
                return null;
            }

            return resultado.id;
        } catch (error) {
            console.error("Error al conectar con Flask:", error);
            return null;
        }
    };

    // Guardar estudios
    const guardarformacion = async (idHojaVida) => {
        try {
            const datosapi = {
                nivel: persona.nivel,
                institucion: persona.institucion,
                titulo: persona.titulo,
                anio_graduacion: persona.anio,
            };

            const respuesta = await fetch(
                `http://127.0.0.1:5000/api/hojas-vida/${idHojaVida}/estudios`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datosapi),
                }
            );

            const resultado = await respuesta.json();

            console.log("Estudio registrado:", resultado);

            if (!respuesta.ok) {
                console.error("Error del servidor:", resultado);
                return null;
            }

            return resultado.id;
        } catch (error) {
            console.error("Error al registrar estudio:", error);
            return null;
        }
    };

    // Guardar cursos
    const guardarCursos = async (idHojaVida) => {
        for (const curso of persona.cursos) {
            try {
                const respuesta = await fetch(
                    `http://127.0.0.1:5000/api/hojas-vida/${idHojaVida}/cursos`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nombre: curso,
                        }),
                    }
                );

                const resultado = await respuesta.json();

                console.log("Curso registrado:", resultado);

                if (!respuesta.ok) {
                    console.error("Error del servidor:", resultado);
                }
            } catch (error) {
                console.error("Error al registrar curso:", error);
            }
        }
    };

    // Guardar experiencia
    const guardarExperiencia = async (idHojaVida, experiencia) => {
        try {
            const datosapi = {
                empresa: experiencia.empresa,
                cargo: experiencia.cargo,
                tiempo: experiencia.tiempo,
                funciones: Array.isArray(experiencia.funcion)
                    ? experiencia.funcion.join(", ")
                    : experiencia.funcion,
            };

            const respuesta = await fetch(
                `http://127.0.0.1:5000/api/hojas-vida/${idHojaVida}/experiencias`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datosapi),
                }
            );

            const resultado = await respuesta.json();

            console.log("Experiencia registrada:", resultado);

            if (!respuesta.ok) {
                console.error("Error del servidor:", resultado);
                return null;
            }

            return resultado.id;
        } catch (error) {
            console.error("Error al registrar experiencia:", error);
            return null;
        }
    };

    // Guardar habilidades
    const guardarHabilidades = async (idExperiencia, habilidades) => {
        for (const habilidad of habilidades || []) {
            try {
                const respuesta = await fetch(
                    `http://127.0.0.1:5000/api/experiencias/${idExperiencia}/habilidades`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nombre: habilidad,
                        }),
                    }
                );

                const resultado = await respuesta.json();

                console.log("Habilidad registrada:", resultado);

                if (!respuesta.ok) {
                    console.error("Error del servidor:", resultado);
                }
            } catch (error) {
                console.error("Error al registrar habilidad:", error);
            }
        }
    };

    // Guardar todo
    const guardarTodo = async () => {
        const idHojaVida = await guardarHojavida();

        if (!idHojaVida) {
            return;
        }

        await guardarformacion(idHojaVida);

        await guardarCursos(idHojaVida);

        for (const experiencia of persona.experiencias) {
            const idExperiencia = await guardarExperiencia(
                idHojaVida,
                experiencia
            );

            if (idExperiencia) {
                await guardarHabilidades(
                    idExperiencia,
                    experiencia.habilidades
                );
            }
        }

        alert("¡Hoja de vida registrada correctamente!");
    };

    return (
        <div className="contenedor">
            <Header />

            {/* PASO 1 */}
            {paso === 1 && (
                <FormularioDatos
                    persona={persona}
                    setPersona={setPersona}
                    siguiente={() => setPaso(2)}
                />
            )}

            {/* PASO 2 */}
            {paso === 2 && (
                <FormacionAcademica
                    persona={persona}
                    setPersona={setPersona}
                    anterior={() => setPaso(1)}
                    siguiente={() => setPaso(3)}
                />
            )}

            {/* PASO 3 */}
            {paso === 3 && (
                <ExperienciaLaboral
                    persona={persona}
                    setPersona={setPersona}
                    anterior={() => setPaso(2)}
                    siguiente={() => setPaso(4)}
                />
            )}

            {/* PASO 4 (Vista Previa y Guardar Todo) */}
            {paso === 4 && (
                <VistaPrevia
                    persona={persona}
                    anterior={() => setPaso(3)}
                    guardar={guardarTodo}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;