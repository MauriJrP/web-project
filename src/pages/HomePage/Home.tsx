import { Container } from "@chakra-ui/react"
import AirbnbCard from "../../components/AirbnbCard"

export default function Home() {
  return (
    <> 
    <body className="-mx-1">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <a href="http://localhost:3000/home" className="flex items-center gap-3 ">
        <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" className="h-10 w-6 m-5" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tecnologia</span>
        <div className="flex gap-5 text-center m-5 flex-row ">
        <ul className="text-slate-300 flex items-end" >Inicio</ul>
        <ul className="text-slate-300 flex items-end" >Productos</ul>
        <ul className="text-slate-300 flex items-end" >Contacto</ul>
        <ul className="text-slate-300 flex items-end" >Login</ul>
        </div>
      </a>
      </nav>
        <h1 className="mb-12 text-2xl items-center m-3 p-6 border-x-2">Tienda de Tecnologia 1#</h1>
        <AirbnbCard/>
    </body>
    </>
  )
}
