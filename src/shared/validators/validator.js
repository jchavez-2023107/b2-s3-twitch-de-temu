//Crear todas las validaciones de Campos
/* ----------------------- VALIDACIÓN DE CORREO ----------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/* ----------------------- VALIDACIÓN DE CORREO ----------------------- */

/* ----------------------- VALIDACIÓN DE USERNAME ----------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}
/* ----------------------- VALIDACIÓN DE USERNAME ----------------------- */

/* ----------------------- VALIDACIÓN DE CONTRASEÑA ----------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    // Para chetar después
    return regex.test(password)
}
/* ----------------------- VALIDACIÓN DE CONTRASEÑA ----------------------- */

/* ----------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ----------------------- */
export const validatePasswordConfirm = (password, passwordConfirm)=>{
    return password === passwordConfirm
}
/* ----------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ----------------------- */


/* -------------------------------------------------------------------------------- */
/* ----------------------- MENSAJES GENERALES DE VALIDACIÓN ----------------------- */
/* -------------------------------------------------------------------------------- */
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe de contener entre 3 y 8 caracteres'
export const passwordValidationMessage = 'La contraseña debe de contener entre 6 y 12 caracteres'
export const passwordConfirmValidationMessage = 'La confirmación debe de ser igual a la contraseña'