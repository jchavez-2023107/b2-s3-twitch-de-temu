import React from 'react'
import { Register } from '../../components/Register/Register'
import './AuthPage.css'

//Exportación del tipo Named
export const AuthPage = () => {
  return (
    <div>
        Esta es la página donde se podrá logear o registrar
        <Register />
    </div>
  )
}
