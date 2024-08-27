import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

import { cartContext } from '../../context/CartContext'

const Footer = () => {
  const { user } = useAuthContext()
  /* const { clearCart } = useContext(cartContext)

const cartId= user?.user.cartId
console.log(cartId)

if (cartId !== null ) {
  return (
    <div>
      <button onClick={()=> clearCart(cartId)}>Vaciar Carrito</button>
    </div>
  )} */
  if (user !== null) {
    return (
      <div className='divFooter'><div className='d-flex text-center'>Tu carrito esta vacío</div></div>
    )
  }

  else if (user == 'carrito vacío') {
    return (
      <div className='divFooter text-center d-flex flex-column'>
        <p>El carrito está Vacío</p>
      </div>
    )
  }
  else {
    return (
      <div className='divFooter'>Footer</div>
    )
  } 
}

export default Footer