import React from 'react'
import Alerta from './Alerta'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const Formulario = () => {
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3,'El nombre es muy corto')
                    .max(20, 'El nombre es muy largo')
                            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
                .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
                .email('Email no valido')
                   .required('El email es obligatorio'),
        telefono: Yup.number().
                    integer('El numero de telefono es invalido').
                    positive('El numero de telefono es invalido').
                    typeError('El numero de telefono es invalido'),
                   
        notas: ''
    })


    const handleSubmit =  async (values) => {
        try {
            const url ="http://localhost:4000/clientes"
            const respuesta= await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const resultado = await respuesta.json()
            console.log(resultado)

            } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({errors,touched}) => {
                            
                        return (

                    <Form className='mt-10'>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor="nombre">Nombre</label>
                            <Field
                                name="nombre"
                                id="nombre"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Nombre del Cliente"
                            />
                            {errors.nombre && touched.nombre ? (
                                <Alerta>{errors.nombre}</Alerta>
                            ) : null }
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor="empresa">Empresa del cliente</label>
                            <Field
                                name="empresa"
                                id="empresa"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Empresa  del Cliente"
                            />
                              {errors.empresa && touched.empresa ? (
                                <Alerta>{errors.empresa}</Alerta>
                            ) : null }
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor="email">Email del cliente</label>
                            <Field
                                name="email"
                                id="email"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="E-mail"
                                
                                
                            />
                            {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null }
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor="telefono">Telefono del cliente</label>
                            <Field
                                name="telefono"
                                id="telefono"
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Telefono del cliente"
                            />
                            {errors.telefono && touched.telefono ? (
                                <Alerta>{errors.telefono}</Alerta>
                            ) : null }
                        </div>

                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor="notas">Notas:</label>
                            <Field
                                name="notas"
                                as="textarea"
                                id="notas"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                placeholder="Notas del cliente"
                            />
                        </div>

                        <input type="submit" value="Agregar Cliente" className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg' />

                    </Form>

                        )





}}
            </Formik>
        </div>
    )
}

export default Formulario