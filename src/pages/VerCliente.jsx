import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
const VerCliente = () => {

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

        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p> No hay resultados</p> : (




            <div>


                <>

                    <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
                    <p className='mt-3'>Llena los siguientes campos para registrar un cliente</p>
                    <p className='text-4xl text-gray-700 mt-3'>

                        <span className=' uppercase font-bold  '>Cliente: </span>
                        {cliente.nombre}

                    </p>
                    <p className='text-2xl text-gray-700 mt-3'>

                        <span className=' text-gray-800 uppercase font-bold '>Email: </span>
                        {cliente.email}

                    </p> <p className='text-2xl text-gray-700 mt-3'>

                        <span className=' text-gray-800 uppercase font-bold '>Correo: </span>
                        {cliente.email}

                    </p> <p className='text-2xl text-gray-700 mt-3'>

                        <span className=' text-gray-800 uppercase font-bold '>Telefono: </span>
                        {cliente.telefono}

                    </p>
                    <p className='text-2xl text-gray-700 mt-3'>

                        <span className=' text-gray-800 uppercase font-bold '>Notas: </span>
                        {cliente.notas}

                    </p>


                </>

            </div>
        ))
}

export default VerCliente