import { useState, createContext } from 'react'
import axios from 'axios'
import { apiURL } from '../service/config'

export const cartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  console.log(cart)
  console.log("monto total: ", total)
  console.log("cantidad de items", totalQuantity)

  const addToCart = async (cartId, product, quantity, pid) => {
    await axios.post(`${apiURL}/carts/${cartId}/products/${pid}`, { product, quantity })
  }

  const deleteProduct = () => {
    
  }
  const clearCart = async (cartId) => {
    await axios.get(`${apiURL}/carts/${cartId}`)
    await axios.delete(`${apiURL}/carts/${cartId}`)
  }
  return (<cartContext.Provider value={{ cart, total, totalQuantity, addToCart, deleteProduct, clearCart }}>{children}</cartContext.Provider>)
}
