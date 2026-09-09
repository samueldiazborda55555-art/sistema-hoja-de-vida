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


    //conrctar react con flask
    const guardarhojavida = async () => {
        try{

            const datosapi = {
                nombre:aprendiz.nombre,
                edad:aprendiz.edad,
                ciudad:aprendiz.ciudad,
                correo:aprendiz.correo,
                fotografia:aprendiz.fotografia,
                programa:aprendiz.programa,
                ficha:aprendiz.ficha,
                jornada:aprendiz.jornada,
            };

            const respuesta = await fetch(
                "http://127.0.0.1:5000/api/registrohv",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body:JSON.stringify(datosapi)
                }
            );
            const resultado = await respuesta.json(); 

            console.log("respuesta realizada", resultado);








        }catch(error){
            console.error(
                "error al conectar con flask",error
            );
        };

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
                    guardarHojavida={guardarhojavida}
                />
            )}

            <Footer />

        </div>
    );
}

export default App;