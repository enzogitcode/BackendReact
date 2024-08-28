import instance from './config'

//products
export const getProducts= async () => await instance.get(`/products`)
export const getProductById= async (pid) => await instance.get(`/products/${pid}`)

export const updateProducts= async (pid)=> await instance.put(`/products/${pid}`)

export const deleteProducts= async (pid)=> await instance.delete(`/products/${pid}`)

//carts
export const getCartById= async (cid) => await instance.get(`/carts/${cid}`)

