import { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { apiURL } from '../../service/config'
import {useAuthContext} from '../../context/AuthContext'
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import { cartContext } from '../../context/CartContext'
const ProductDetails = () => {
  const { addToCart } = useContext(cartContext)
  const {user} = useAuthContext()

  const [product, setProduct] = useState(null)
  const [title, setTitle] = useState(null)
  const [owner, setOwner] = useState("")
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')
  const [code, setCode] = useState('')
  const [img, setImg] = useState([])
  const [quantity, setQuantity] = useState(0)
  const { pid } = useParams();
  

  const fetchData = async () => {
    const response = await axios.get(`${apiURL}/products/${pid}`)
    const data = response.data
    const { title, code, img, category, description, owner, stock, price } = response.data
    setTitle(title)
    setPrice(price)
    setCategory(category)
    setDescription(description)
    setOwner(owner)
    setStock(stock)
    setImg(img)
    setCode(code)

    setProduct(data)
  }
  useEffect(() => {
    fetchData()
  }, [])


  const handleQuantity = (quantity) => {
    setQuantity(quantity)
    const item = { pid, title, price }
    const cartId= user?.user.carts
    addToCart(cartId, item, quantity, pid)
  }

  return (
    <div className='text-center'>
      <h3 className='pt-3 pb-2'>{title}</h3>

      <div className="card align-items-center mx-5 rounded-bottom">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Descripción: {description}</p>
          <p className="card-text">Precio: $ {price}</p>
          <p className="card-text">Stock: {stock}</p>
          <p className="card-text">Propietario: {owner}</p>
        </div>
        <ItemCount stock={stock} initialCounter={1} addQuantity={handleQuantity} />
      </div>

    </div>
  )
}

export default ProductDetails