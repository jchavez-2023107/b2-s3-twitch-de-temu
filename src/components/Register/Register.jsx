import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { useRegister } from '../shared/hooks/useRegister'


export const Register = () => {
    //const [name, setName] = useState('Coloshooo')
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
            />
            <Input 
                field='username'
                label='Username' 
                //value={formData.username.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.username.value}
                type='username' 
            />
            <Input 
                field='password'
                label='Password' 
                //value={formData.password.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.password.value}
                type='password' 
            />
            <Input 
                field='passwordConfirm'
                label='Password Confirmation' 
                //value={formData.passwordConfirm.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.passwordConfirm.value}
                type='password' 
            />
            {/* <label htmlFor=''>Nombre</label>
            <input placeholder={name} name='name' onChange={handleValueChange} type='text' /> */}
            {/* <input id='name' type='text' /> */}
            {/* <button onClick={handleSubmit}>Enviar</button> */}
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}