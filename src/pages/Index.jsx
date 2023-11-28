import { useLoaderData } from "react-router-dom"
import { obtenerCliente } from "../API/Clientes";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = obtenerCliente()
  return clientes;
}

const index = () => {

  const clientes = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Cliente</h1>
      <p className="mt-3">Adminstra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map( cliente => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
            ))}
          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10">No Hay Clientes Aún</p>
      )}
    </>
  )
}

export default index