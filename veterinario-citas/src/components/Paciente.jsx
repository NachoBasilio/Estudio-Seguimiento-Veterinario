export default function Paciente({pacientes}) {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{pacientes.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {''}
            <span className="font-normal normal-case">{pacientes.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{pacientes.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{pacientes.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{pacientes.sintomas}</span>
        </p>
    </div>
  )
}
