import { useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { clearCart, getCartById } from '../../service/config'
import { Link } from 'react-router-dom'
import CustomButton from '../Generics/CustomButton'

const UserCarts = () => {
  const { user } = useAuthContext()

  const [products, setProducts] = useState(null)

  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const cartId = user?.user?.carts

  const fetchCarts = async () => {
    const res = await getCartById(cartId)
    const resProd = res.data.products
    const dataTotal = resProd.map(item => (parseInt(item.product.price) * (item.quantity))).reduce((acc, item) => item + acc, 0)
    console.log(dataTotal)
    const totalQuantity = resProd.map((item) => item.quantity).reduce((acc, item) => acc + item, 0)
    console.log(totalQuantity)
    setTotalQuantity(totalQuantity)
    setTotal(dataTotal)
    setProducts(resProd)
  }
  useEffect(() => {
    fetchCarts()
  }, [])

  const handleClearDelete = async (cartId) => {
    await clearCart(cartId)
    alert('Vaciaste el carrito')
    fetchCarts()
  }
  return (
    <div className='cartContainer'>
      <h1 className='text-center pt-2'>Mi Carrito</h1>
      <div className='itemCartContainer d-flex flex-wrap align-items-center justify-content-center gap-4 text-center'>
        {products?.map(item => (
          <div className='itemCart d-flex flex-column text-center' key={item._id}>
            <h2>{item.product.title}</h2>
            <p>Precio: ${item.product.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        ))}
        <p>Cantidad total de productos: {totalQuantity}</p>
        <p>Total: {total}</p>
        <button onClick={() => handleClearDelete(cartId)}>Vaciar carrito</button>
      </div>
    </div>
  );
};


export default UserCarts