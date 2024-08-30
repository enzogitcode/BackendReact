import React, { useState } from 'react'
import { getCartById, purchase } from '../../service/config'
import { useAuthContext } from '../../context/AuthContext'

const Checkout = () => {
  const { user } = useAuthContext
  const cartId = user?.user?.carts

  const [ticket, setTicket] = useState("")
  const saludo = 'hola'
  const handlePurchase = async () => {
    /* const res= await purchase(cartId)
    const data= res.data */
    console.log(data)
  }
  return (
    <div>
      <button onClick={handlePurchase}></button>
      {handlePurchase && <p>{saludo}</p>}
    </div>
  )
}

export default Checkout