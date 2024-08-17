import React from 'react'

const Footer = () => {
    const user= 'carrito vacío'
    if (user =='user') {
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
        <div className='divFooter'></div>
      )
    }
}

export default Footer