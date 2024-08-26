import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { apiURL } from '../../service/config'
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null)
  
  const fetchData = async () => {
    const response = await axios.get(`${apiURL}/products/${pid}`)
    setProduct({...response.data})
    
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      Hola {pid}
      Hola {...product.title}
      Hola {...product.title}
      
<div className='addCart d-flex flex-inline'>
  <button>+</button>
  <p>Número</p>
  <button>-</button>
</div>
    </div>
  )
}

export default ProductDetails