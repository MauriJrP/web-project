
import loginIMG from "../../assets/login.jpg";

export default function Login() {
    return (
      <> 
     <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover max-w-screen-lg max-h-screen" src={loginIMG} alt="login" />
      </div>
      <div className="bg-gray-100 flex flex-col justify-center ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-4">TechStore.</h2>
          <div className="flex flex-col py-2">
            <label>Nombre de usuario</label>
            <input className="border bg-gray-100 p-1" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Contraseña</label>
            <input className="border bg-gray-100 p-1" type="password" />
          </div>
          <button className="border w-full my-5 py-2 bg-neutral-600 hover:bg-neutral-700 text-white">Iniciar Sesión</button>
          <div>
            <p className="text-center">¿No tienes cuenta? <a href="http://localhost:3000/createAccount" className="text-blue-500">Registrate</a></p>  
          </div>
        </form>
      </div>
    </div>
      </>
    )
  }