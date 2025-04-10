import React, { useState } from 'react'
import { Input } from '../Input/Input'


export const Register = () => {
    const [name, setName] = useState('Coloshooo')
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
            value: '2023107-jchavez',
            isValid: false,
            showError: false
        },
        passwordConfirm: {
            value: '2023107-jchavez',
            isValid: false,
            showError: false
        },
    }

    const [formData, setFormData] = useState(form)

    //Todas las funciones o acciones comienzan con Handle
    const handleSubmit = (event)=>{
        event.preventDefault();
        // const input = document.getElementById('name')
        console.log(name);
    }

    const handleChange = (e)=>{
        //Evento
            console.log(e);
        //Objetivo/Etiqueta
            console.log(e.target);
        //valor
            console.log(e.target.value);
        setName(e.target.value)
    }

  return (
    <div className='register-container'>
        {/* 
            Formularios controlados (RECOMENDABLE EN REACT) (Virtual DOM) 
            y
            Formularios no controlados (DOM)
         */}
        <form className='auth-form' action=''>
            <Input 
                label='Email' 
                value={formData.email.value}
                placeholder={formData.email.value}
                type='email' 
            />
            <Input 
                label='Username' 
                value={formData.username.value}
                placeholder={formData.username.value}
                type='username' 
            />
            <Input 
                label='Password' 
                value={formData.password.value}
                placeholder={formData.password.value}
                type='password' 
            />
            <Input 
                label='PasswordConfirm' 
                value={formData.passwordConfirm.value}
                placeholder={formData.passwordConfirm.value}
                type='password' 
            />
            {/* <label htmlFor=''>Nombre</label>
            <input placeholder={name} name='name' onChange={handleChange} type='text' /> */}
            {/* <input id='name' type='text' /> */}
            {/* <button onClick={handleSubmit}>Enviar</button> */}
            <button onClick={handleSubmit}>Enviar</button>
        </form>
    </div>
  )
}