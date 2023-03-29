import { Link } from "react-router-dom"

export const CreateMenu = () => {
  return (
    <ul className="bg-slate-900 flex flex-col gap-2 rounded-md text-white font-bold absolute -top-40 left-[calc(50%-4rem)] w-32 text-center p-3">
        <Link to='/add-clothe' className="bg-slate-800 p-1 rounded-md uppercase">Añadir Ropa</Link>
        <Link to='/add-outfit' className="bg-slate-800 p-1 rounded-md uppercase">Crear Outfit</Link>
    </ul>
  )
}
