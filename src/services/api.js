import axios from "axios";

//Configuración básica (General o genérica)
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2656/twitch/v1',
        timeout: 2000
    }
)

//Ruta para registrar
export const registerRequest = async (user) => {
    try {
        return await apiClient.post('/auth/register', user, {
            type: 'multipart/form-data'
        })
    } catch (err) {
        return {
            error: true,
            err
        }
    }    
}