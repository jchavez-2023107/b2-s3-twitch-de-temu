import React from 'react'
import PropTypes from 'prop-types'
import propTypes from 'prop-types'

export const Input = ({
    field,
    label,
    value,
    type,
    placeholder
}) => {

    const handleChange = (e)=>{
        console.log('Cambio de estado');
        
    }

  return (
    <>
        <div className='auth-form-label'>
            <span>{label}</span>
        </div>
        <input 
            type={type} 
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    </>
  )
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}