import {useState, useEffect} from 'react' 
import Error from './Error'

export default function Formulario({setPacientes,pacientes,paciente}) {
  const [cliente, setCliente] = useState({
    nombre:"",
    propietario:"",
    fecha:"",
    email:"",
    sintomas:"",
    id:generarId()
  })

  useEffect(()=>{

  },[paciente])
  


  function generarId(){
    return Math.random().toString(23).substring(2)+Date.now().toString(32)
  }//Lo hago asi por el hoisting

  const[error, setError] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()

    //Validacion formulario
    if([cliente.nombre, cliente.propietario, cliente.fecha, cliente.email, cliente.sintomas].includes("")){
      setError(true)
      return
    }
    setError(false)
    setPacientes([...pacientes, cliente])
    setCliente({
      nombre:"",
      propietario:"",
      fecha:"",
      email:"",
      sintomas:"",
      id:generarId()
    })
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form 
      action="" 
      className="bg-white shadow-md rounded-md px-5 py-10 mb-10"
      onSubmit={handleSubmit}
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input 
          id="mascota" 
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
          type="text" 
          placeholder="Nombre de la mascota" 
          value={cliente.nombre}
          onChange={(e)=>{
            setCliente({...cliente, nombre:e.target.value})
          }}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Propietario">Nombre Propietario</label>
          <input 
          id="Propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
          type="text" 
          placeholder="Nombre de la mascota" 
          value={cliente.propietario}
          onChange={(e)=>{
            setCliente({...cliente, propietario:e.target.value})
          }}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Email">Email</label>
          <input 
          id="Email" 
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
          type="text" 
          placeholder="Email del propietario" 
          value={cliente.email}
          onChange={(e)=>{
            setCliente({...cliente, email:e.target.value})
          }}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Alta">Alta</label>
          <input 
          id="Alta" 
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" 
          type="date" 
          value={cliente.fecha}
          onChange={(e)=>{
            setCliente({...cliente, fecha:e.target.value})
          }}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Sintomas">Sintomas</label>
          <textarea 
          name="" 
          id="Sintomas" 
          className="border-2 w-full p-2 mt-2" 
          placeholder="Sintomas"
          value={cliente.sintomas}
          onChange={(e)=>{
            setCliente({...cliente, sintomas:e.target.value})
          }}
          ></textarea>
        </div>

        <input 
        type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        value="Agregar Paciente" />
      </form>
    </div>
  )
}
