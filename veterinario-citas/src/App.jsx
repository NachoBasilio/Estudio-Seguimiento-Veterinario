import Header from "./components/Header"
import Formulario from "./components/Formulario"

function App() {
  const real = false
  return (
    <div className="App">
      <Header/>
      <h2>{real ? "Real no fake" : "No real, totalmente fake"}</h2>
    </div>
  )
}

export default App
