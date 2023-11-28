import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    return(
        <div>
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clientes</h1>
            <p className="text-center mt-4">Hubo un error</p>
            <p className="text-center mt-2">{error.statusText || error.message}</p>
        </div>
        
    )
}