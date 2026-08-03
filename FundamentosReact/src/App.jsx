import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import FormularioDatos from "./assets/components/FormularioDatos";
import FormularioAcademico from "./assets/components/FormularioAcademico";
import FormularioExperiencia from "./assets/components/FormularioExperiencia";
import "./App.css";

function App() {
  const [paso, setPaso] = useState(1);

  //datos compartidos
  const [persona,setpersona] = useState({
    
    
    //datos personales de la persona
    foto: null,
    nomte:"",
    edad:"",
    ciudad:"",
    correo:"",
    programa:"",
    ficha:"",
    jornada:"Mañana",

    //informmación de estudios
    nivel:"",
    institucion:"",
    titulo:"",
    anio:"",
    cursos:"",

    //experiencia
    empresa:"",
    cargo:"",
    tiempo:"",
    funciones:"",
    habilidades:"",


  })

  return (
    <div className="contenedor">

      <Header />

      {paso === 1 && (
        <FormularioDatos
          siguiente={() => setPaso(2)}
        />
      )}

      {paso === 2 && (
        <FormularioAcademico
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <FormularioExperiencia
          anterior={() => setPaso(2)}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;