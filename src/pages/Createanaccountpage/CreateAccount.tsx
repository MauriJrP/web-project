import loginIMG from "../../assets/login.jpg";

export default function CreateAccount() {
  return (
    <> 
    <div className="relative w-full h-screen bg-zinc-900/90">
        <img className="absolute w-full h-full object-cover mix-blend-overlay" src={loginIMG} />

    <div className="flex justify-center items-center h-full">
    <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="relative text-4xl font-bold text-center py-4">TechStore.</h2>
          <h2 className="relative text-3X1 font-bold text-center py-1">Crear Cuenta</h2>

          <div className="relative flex flex-col py-1">
            <label>Nombre de usuario</label>
            <input className="border relative bg-gray-100 p-1" type="text" />
          </div>
          <div className="relative flex flex-col py-1">
            <label>Correo electronico</label>
            <input className="border relative bg-gray-100 p-1" type="email" />
          </div>
          <div className="relative flex flex-col py-1">
            <label>Contraseña</label>
            <input className="border relative  bg-gray-100 p-1" type="password" />
          </div>
          <button className="border relative w-full my-5 py-2 bg-neutral-600 hover:bg-neutral-700 text-white">Crear Cuenta</button>
          <div>
            <p className="relative text-center">¿Ya tienes cuenta? <a href="http://localhost:3000/login?" className="text-blue-500">Inicia sesion</a></p>
          </div>
        </form>
    </div>

    </div>
    </>
  )
}