import { useState } from "react";

import Header from "./components/Header";
import FormacionAcademica from "./components/FormularioAcademico";
import FormularioDatos from "./components/FormularioDatos";
import ExperienciaLaboral from "./components/FormularioExperiencia";
import VistaPrevia from "./components/VistaPrevia";
import Footer from "./components/Footer";

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

    // Conectar React con Flask
        // Conectar React con Flask
    const guardarHojavida = async () => {

        try {
            // 1. Guardar datos personales
            const datosapi = {
                nombre: persona.nombre,
                edad: persona.edad,
                ciudad: persona.ciudad,
                correo: persona.correo,
                fotografia: persona.foto ? persona.foto.name : "",
                programa: persona.programa,
                ficha: persona.ficha,
                jornada: persona.jornada
            };

            const respuesta = await fetch(
                "http://127.0.0.1:5000/api/registrohv",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datosapi)
                }
            );

            const resultado = await respuesta.json();

            if (!respuesta.ok) {
                alert(resultado.mensaje || "Error al registrar los datos personales");
                return;
            }

            const idHoja = resultado.id;

            // 2. Guardar formación académica (estudios)
            await fetch(
                `http://127.0.0.1:5000/api/hojas-vida/${idHoja}/estudios`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        nivel: persona.nivel,
                        institucion: persona.institucion,
                        titulo: persona.titulo,
                        anio_graduacion: persona.anio
                    })
                }
            );

            // 3. Guardar cursos (uno por uno)
            for (const curso of persona.cursos) {
                await fetch(
                    `http://127.0.0.1:5000/api/hojas-vida/${idHoja}/cursos`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ nombre: curso })
                    }
                );
            }

            // 4. Guardar experiencias laborales (una por una)
            for (const exp of persona.experiencias) {

                const respExp = await fetch(
                    `http://127.0.0.1:5000/api/hojas-vida/${idHoja}/experiencias`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            empresa: exp.empresa,
                            cargo: exp.cargo,
                            tiempo: exp.tiempo,
                            funciones: exp.funcion.join(", ")
                        })
                    }
                );

                const resultadoExp = await respExp.json();
                const idExperiencia = resultadoExp.id;

                // 5. Guardar habilidades de esa experiencia
                for (const habilidad of exp.habilidades) {
                    await fetch(
                        `http://127.0.0.1:5000/api/experiencias/${idExperiencia}/habilidades`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ nombre: habilidad })
                        }
                    );
                }
            }

            alert("Hoja de vida registrada correctamente, con toda la información");

        } catch (error) {
            console.error("Error al conectar con Flask", error);
            alert("Ocurrió un error al guardar la hoja de vida");
        }

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

            {/* PASO 4 */}
            {paso === 4 && (
                <VistaPrevia
                    persona={persona}
                    anterior={() => setPaso(3)}
                    guardarHojavida={guardarHojavida}
                />
            )}

            <Footer />

        </div>
    );
}

export default App;
