import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { useRegister } from '../../shared/hooks/useRegister'
import { emailValidationMessage, passwordConfirmValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassword, validatePasswordConfirm, validateUsername } from '../../shared/validators/validator'


export const Register = () => {
    //const [name, setName] = useState('Coloshooo')
    const prueba = false
    const form = {
        email: {
            value: 'jchavez-2023107@kinal.edu.gt',
            isValid: false,
            showError: false
        },
        username: {
            value: 'jchavez-2023107',
            isValid: false,
            showError: false
        },
        password: {
            value: 'Ejemplo2023107-jchavez',
            isValid: false,
            showError: false
        },
        passwordConfirm: {
            value: 'Confirmacion2023107-jchavez',
            isValid: false,
            showError: false
        },
    }

    const [formData, setFormData] = useState(form)
    const { register } = useRegister()
    const isSubmitButtonDisabled = !formData.email.isValid    ||
                                   !formData.username.isValid ||
                                   !formData.password.isValid ||
                                   !formData.passwordConfirm.isValid

    //Todas las funciones o acciones comienzan con Handle
    const handleSubmit = (event)=>{
        event.preventDefault();
        // const input = document.getElementById('name')
        //console.log(name);
        console.log(formData)
        register(
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
        prueba=true
    }

    //Validar si el valor es correcto    
    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch (field) {
            case 'email':
                isValid= validateEmail(value) //Validar si el email es valido
                break;

            case 'username':
                isValid= validateUsername(value) //Validar si el username es valido
                break;        
                    
            case 'password':
                isValid=  validatePassword(value) //Validar si el password es valido
                break;
            
            case 'passwordConfirm':
                isValid= validatePasswordConfirm(formData.password.value, value) //Validar si el passwordConfirm es valido
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
    <div className='register-container'>
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
                field='username'
                label='Username' 
                //value={formData.username.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.username.value}
                type='username' 
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.username.showError}
                validationMessage={usernameValidationMessage}
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
            <Input 
                field='passwordConfirm'
                label='Password Confirmation' 
                //value={formData.passwordConfirm.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.passwordConfirm.value}
                type='password' 
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.passwordConfirm.showError}
                validationMessage={passwordConfirmValidationMessage}
            />
            {/* <label htmlFor=''>Nombre</label>
            <input placeholder={name} name='name' onChange={handleValueChange} type='text' /> */}
            {/* <input id='name' type='text' /> */}
            {/* <button onClick={handleSubmit}>Enviar</button> */}
            <button type='submit' disabled={isSubmitButtonDisabled}>Enviar</button>
        </form>
    </div>
  )
}