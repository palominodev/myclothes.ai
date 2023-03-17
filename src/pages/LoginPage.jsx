export const LoginPage = () => {
  return (
    <main>
        <h3 className='m-2 font-sans text-4xl font-bold'>Iniciar Sesión</h3>
        <form className='flex flex-col'>
            <label className='m-2'>
                <input className='rounded-md p-2 border border-black' type="text" name="correo" id="correo" placeholder='Direccion de e-mail' />
            </label>
            <label className='m-2'>
                <input className='rounded-md p-2 border border-black' type="password" name="password" id="password" placeholder='contraseña' />
            </label>
            <input className='cursor-pointer m-2 bg-lime-500 hover:bg-lime-600 p-3 rounded-md font-bold w-32' type="submit" value="Iniciar sesion" />
            <p className='m-2 mt-4 italic'><a href="#">¿Has olvidado tu contraseña</a></p>
            <button className='cursor-pointer m-2 bg-lime-500 hover:bg-lime-600 p-3 rounded-md font-bold w-32'>Crear cuenta</button>
        </form>
        <button className='cursor-pointer m-2 bg-yellow-500 hover:bg-yellow-600 p-3 rounded-md font-bold w-32'>Siguiente</button>
    </main>
  )
}
