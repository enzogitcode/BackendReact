import axios from 'axios'

export const apiURL= `http://localhost:8080/api`

const instance = axios.create({
    baseURL: `${apiURL}`
})
//user
export const registerRequest = user => axios.post(`${apiURL}/users/register`, user)

export const loginRequest = (user) => axios.post(`${apiURL}/users/login`, user)

//products
export const productsRequest= async () => await axios.get(`${apiURL}/products`)

export default instance