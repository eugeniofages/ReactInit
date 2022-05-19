import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(() => {
      const obtenerClientesAPI = async () => {
          const url = `http://localhost:3000/clientes/${id}`
          const response = await fetch(url)
          const res = await response.json()
          setCliente(res)

        
          setCargando(!cargando)
      }
      obtenerClientesAPI()

  }, [])



  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
    <p className='mt-3'>Utliza este formulario para editar datos de un cliente</p>

    {cliente?.nombre ? (

      <Formulario 
      cliente={cliente}
      cargando={cargando}
      />

     ): <p>No se encuentra el cliente solicitado</p>}
    </>
  )
}

export default EditarCliente