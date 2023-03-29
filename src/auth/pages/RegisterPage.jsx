import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"

export const RegisterPage = () => {
    const {correo,password,password2,username,onInputChange} = useForm({
        correo: '',
        password: '',
        password2: '',
        username: '',
    })


    const navigate = useNavigate()
    const onRedirect = (e) => {
        e.preventDefault()
        navigate('/login')
    }
  return (
    <main>
        <h3 className='m-2 font-sans text-4xl font-bold'>Registrarse</h3>
        <form className='flex flex-col'>
            <h4 className="m-2 text-2xl font-bold">Correo</h4>
            <label className='m-2'>
                <input 
                    onChange={onInputChange}
                    value={correo}
                    className='w-80 rounded-md p-2 border border-black' 
                    type="text" 
                    name="correo" 
                    id="correo" 
                    autoComplete="correo@gmail.com"
                    placeholder='Direccion de e-mail' />
            </label>
            <label className='m-2'>
                <input 
                    onChange={onInputChange}
                    value={password}
                    className='w-80 rounded-md p-2 border border-black' 
                    type="password" 
                    name="password" 
                    id="new-password" 
                    autoComplete="new-password"
                    placeholder='Ingresa contraseña' />
            </label>
            <label className='m-2'>
                <input 
                    onChange={onInputChange}
                    value={password2}
                    className='w-80 rounded-md p-2 border border-black' 
                    type="password" 
                    name="password2" 
                    id="password2"
                    autoComplete="new-password"    
                    placeholder='Vuelve a ingresar la contraseña' />
            </label>
            <h4 className="m-2 text-2xl font-bold">Usuario</h4>
            <label className="m-2">
                <input 
                    onChange={onInputChange}
                    value={username}
                    className='w-80 rounded-md p-2 border border-black'
                    placeholder="Ingresa tu nombre de usuario"
                    autoComplete="Juanito" 
                    type="text" 
                    name="username" 
                    id="username" />
            </label>
            <h4 className="m-2 text-2xl font-bold">Genero</h4>
            <div className="flex">
                <label className="m-2 flex gap-1">
                    <input type="radio" name="genero" id="hombreRadio" />
                    <p>Masculino</p>
                </label>
                <label className="m-2 flex gap-1">
                    <input type="radio" name="genero" id="mujerRadio" />
                    <p>Femenino</p>
                </label>
            </div>
            <input className='cursor-pointer m-2 bg-lime-500 hover:bg-lime-600 p-3 rounded-md font-bold w-32' type="submit" value="Crear cuenta" />
            <button 
                onClick={ onRedirect }
                className='m-2 mt-4 italic w-32'>Tengo una cuenta</button>
        </form>
    </main>
  )
}
