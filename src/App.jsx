import { useState } from "react";

import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormacionAcademica from "./components/FormularioAcademico";
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
        experiencias: []
        
    });

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
                    enviar={() => {
                        alert("Hoja de vida enviada correctamente.");
                    }}
                />
            )}

            <Footer />

        </div>
    );
}

export default App;