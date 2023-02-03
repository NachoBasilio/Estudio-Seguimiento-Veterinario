import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const real = false
  return (
    <div className="container mx-auto mt-20"> 
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
      <h2>{real ? "Real no fake" : "No real, totalmente fake"}</h2>
    </div>
  )
}

export default App
