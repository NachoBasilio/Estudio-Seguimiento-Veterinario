export default function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-md px-5 py-10 mb-10">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" type="text" placeholder="Nombre de la mascota" />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Propietario">Nombre Propietario</label>
          <input id="Propietario" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" type="text" placeholder="Nombre de la mascota" />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Email">Email</label>
          <input id="Email" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" type="text" placeholder="Email del propietario" />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Alta">Alta</label>
          <input id="Alta" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" type="date" />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="Sintomas">Sintomas</label>
          <textarea name="" id="Sintomas" className="border-2 w-full p-2 mt-2" placeholder="Sintomas"></textarea>
        </div>

        <input 
        type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        value="Agregar Paciente" />
      </form>
    </div>
  )
}
