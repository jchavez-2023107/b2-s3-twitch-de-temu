import React from 'react'
import { Register } from '../../components/Register/Register'
import './AuthPage.css'
import { Login } from '../../components/Login/Login'

//Exportación del tipo Named
export const AuthPage = () => {
  const [login, setLogin] = useState(prueba)

  if (login = true)
    {setLogin.true}
  
  return (
    <div>
        Esta es la página donde se podrá logear o registrar
        {/* {1 != 1 ? <Login /> : <Register />} */}

        {prueba = true ? <Login /> : <Register /> }

    </div>
  )
}
