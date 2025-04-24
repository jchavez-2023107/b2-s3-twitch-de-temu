import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { useLogin } from '../../shared/hooks/useLogin.jsx'
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from '../../shared/validators/validator.js'


export const Login = () => {
    //const [name, setName] = useState('Coloshooo')
    const form = {
        email: {
            value: 'jchavez-2023107@kinal.edu.gt',
            isValid: false,
            showError: false
        },
        password: {
            value: 'Ejemplo2023107-jchavez',
            isValid: false,
            showError: false
        },
    }

    const [formData, setFormData] = useState(form)
    const { login } = useLogin()
    const isSubmitButtonDisabled = !formData.email.isValid    ||
                                   !formData.password.isValid 

    //Todas las funciones o acciones comienzan con Handle
    const handleSubmit = (event)=>{
        event.preventDefault();
        // const input = document.getElementById('name')
        //console.log(name);
        console.log(formData)
        login(
            formData.email.value,
            formData.password.value
        )
    }

    //Validar si el valor es correcto    
    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch (field) {
            case 'email':
                isValid= validateEmail(value) //Validar si el email es valido
                break;       
                    
            case 'password':
                isValid= validatePassword(value) //Validar si el password es valido
                break;
                
            default:
                break;
        }
        console.log(isValid);
        
        setFormData((prevData) => (
            {
                ...prevData,
                //Inyección del nuevo valor:
                [field]:{
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }
    
                        //Nuevo valor //Identificador del input que cambió
    const handleValueChange = (value, field)=>{
        /* //Evento
            console.log(e);
        //Objetivo/Etiqueta
            console.log(e.target);
        //valor
            console.log(e.target.value);
        setName(e.target.value) */
        setFormData((prevData) => (
            {
                ...prevData,
                //Inyección del nuevo valor:
                [field]:{
                    ...prevData[field],
                    value
                }
            }
        ))
    }

  return (
    <div className='login-container'>
        {/* 
            Formularios controlados (RECOMENDABLE EN REACT) (Virtual DOM) 
            y
            Formularios no controlados (DOM)
         */}
        <form 
            className='auth-form' 
            action=''
            onSubmit={handleSubmit}
        >
            <Input 
                field='email'
                label='Email' 
                //value={formData.email.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.email.value}
                type='email' 
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.email.showError}
                validationMessage={emailValidationMessage}
            />
            <Input 
                field='password'
                label='Password' 
                //value={formData.password.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.password.value}
                type='password' 
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.password.showError}
                validationMessage={passwordValidationMessage}
            />
            {/* <label htmlFor=''>Nombre</label>
            <input placeholder={name} name='name' onChange={handleValueChange} type='text' /> */}
            {/* <input id='name' type='text' /> */}
            {/* <button onClick={handleSubmit}>Enviar</button> */}
            <button type='submit' disabled={isSubmitButtonDisabled}>Enviar</button>
            <a href="/auth">A Registrarse</a>
        </form>
    </div>
  )
}