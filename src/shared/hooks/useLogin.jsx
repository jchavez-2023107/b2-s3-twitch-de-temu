//Manejar la lógica de la respuesta del API
import React, { useState } from 'react'

import toast from 'react-hot-toast'
import { loginRequest } from '../../services/api'

export const useLogin = () => {
    //Ver si aún está cargando la respuesta el API
    const [isLoading, setIsLoading] = useState(false)
    //Saber si la consulta al API trae errores
    const [error, setError] = useState(false)

    //Función que consulta
    const login = async(email, password)=>{
        setIsLoading(true)
        const user = {
            email,
            password
        }
        //Consulto al api mediante la función del api.js
        const response = await loginRequest(user)
        setIsLoading(false)

        //Logica de lo que respondió el back
        if(response?.err){
            setError(true)
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'TODO MAL... Error general al intentar logear el usuario. Intente de nuevo.'
            )
        }
        setError(false)
        return toast.success('TODO GOOD BIENVENID@')
    }
  return {
    login,
    isLoading,
    error,
    setError
  }
}