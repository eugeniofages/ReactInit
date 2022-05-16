import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './layouts/Layout'
import Inicio from './pages/Inicio'
import NuevoCliente from './pages/NuevoCliente'
import EditarCliente from './pages/EditarCliente'
function App() {

  return (
    <BrowserRouter>
      <Routes>
  
      <Route path="/clientes" element={<Layout />} >
          <Route  index element ={<Inicio />} />
          <Route  path="nuevo" element ={<NuevoCliente />} />
          <Route  path="editar/:id" element ={<EditarCliente />} />

      </Route >



    




      </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
