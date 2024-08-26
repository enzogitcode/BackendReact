import { useState, createContext } from 'react'
export const cartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0
})

export const CartProvider = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  console.log(cart)
  console.log("monto total", total)
  console.log("cantidad de items", totalQuantity)

  const addToCart = (product, quantity) => {
    const productFound = cart.find(prod => prod.product.id === (product.id))
    if (!productFound) {
      setCart(prev => [...prev, { item, quantity }])
      setTotalQuantity(prev => prev + quantity)
      setTotal(prev => prev + (item.price * quantity))

    }
    else {
      const updatedCart = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity }

        }
        else {
          return prod
        }
      })
      setCart(updatedCart)
    }

  }

}

