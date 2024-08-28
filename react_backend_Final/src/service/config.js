import axios from 'axios'

export const apiURL= `http://localhost:8080/api`

const instance = axios.create({
    baseURL: `${apiURL}`,
    withCredentials: true
})


//user

export const registerRequest = async (user) => await instance.post(`/users/register`, user)

export const loginRequest = async (user) => await instance.post(`/users/login`, user) 


//products
export const getProducts= async () => await instance.get(`/products`)

export const getProductById= async (pid) => await instance.get(`/products/${pid}`)

export const addProduct= async (newProduct) => await instance.post(`/products`, newProduct)

export const updateProducts= async (pid)=> await instance.put(`/products/${pid}`)

export const deleteProducts= async (pid)=> await instance.delete(`/products/${pid}`)

//carts
export const getCartById= async (cid) => await instance.get(`/carts/${cid}`)

export const purchase= async (cid) => await instance.get(`/carts/${cid}`)
/* export const getCartById= async (cid) => await instance.get(`/carts/${cid}`)
export const getCartById= async (cid) => await instance.get(`/carts/${cid}`) */

export default instance