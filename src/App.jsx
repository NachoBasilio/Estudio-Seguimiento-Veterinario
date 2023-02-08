import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = ()=>{
      if(JSON.parse(localStorage.getItem('pacientes'))!== null){
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))
        setPacientes(pacientesLS) 
        
      }else{
        const pacientesLS =[]
        setPacientes(pacientesLS)
      }


    }

    obtenerLS()
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id)
    setPacientes([...pacientesActualizados])
  }

  return (
    <div className="container mx-auto mt-20"> 
      <Header/>
      <div className="mt-12 md:flex ">
        <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
        
      </div>
    </div>
  )
}

export default App
