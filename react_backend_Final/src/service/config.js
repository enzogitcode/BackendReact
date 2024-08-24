import axios from 'axios'

const apiURL= `http://localhost:8080/api`

const instance = axios.create({
    baseURL: `${apiURL}`
})
export const registerRequest = user => axios.post(`${apiURL}/users/register`, user)




export default instance