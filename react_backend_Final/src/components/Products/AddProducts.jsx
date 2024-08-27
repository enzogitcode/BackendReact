import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../context/AuthContext'


const AddProducts = () => {

  const { user } = useAuthContext()
  const [owner, setOwner] = useState("")
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')
  const [img, setImg] = useState([])
  const [showProduct, setShowProduct] = useState(false);

  const newProduct = { title, category, price, stock, description, img, owner }
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:8080/api/products', { ...newProduct })
      .then(response => { console.log(response) })
      setOwner(user?.user?.email)
      setShowProduct(true)
      CardProduct()
      //cardproduct debe ir después sino toma los inputs vacíos
      clearForm()

    } catch (error) {
      console.log(error)
    }
  }
  const clearForm = () => {
    setTitle("")
    setPrice("")
    setDescription("")
    setStock("")
    setCategory("")
    setImg('')
  }
  const product = axios.get('http://localhost:8080/api/products')
  return (
    <div id='addProductsContainer' className='d-inline-flex flex-wrap'>

      <form className='d-flex flex-column flex-wrap' encType='multipart/form-data' onSubmit={handleSubmit}>

        <label htmlFor='title' className='bg-white'>Title</label>
        <input name='title' value={title}
          onChange={(e) => setTitle(e.target.value)} required/>

        <label htmlFor='description' className='bg-white'>Description</label>
        <input name='description' value={description}
          onChange={(e) => setDescription(e.target.value)} required/>

        <label htmlFor='Price' className='bg-white'>Price</label>
        <input type='number' name='Price' value={price}
          onChange={(e) => setPrice(e.target.value)} required={true} />

        <label htmlFor='Stock' className='bg-white'>Stock</label>
        <input type='number' name='Stock' value={stock}
          onChange={(e) => setStock(e.target.value)} required/>

        <label htmlFor='category' className='bg-white'>Category</label>
        <input type='text' name='category' value={category}
          onChange={(e) => setCategory(e.target.value)} />

        <label htmlFor='img' className='bg-white'>Imágenes</label>
        <input type='file' name='img' value={img}
          onChange={(e) => setCategory(e.target.value)} />
        <button type='submit' onSubmit={CardProduct}>Submit</button>
      </form>
      <button onClick={clearForm}>Limpiar formulario</button>
      <div >
        {showProduct == true ? <CardProduct newProduct={newProduct} /> : <div className='text-center'>Llena el formulario</div>}
      </div>

    </div>
  )
}
const CardProduct = ({ newProduct }) => {
  return <div>
    <h3>Producto creado con éxito</h3>
    <div>Título: {newProduct.title}</div>
    <div>Descripción: {newProduct.description}</div>
    <div>Código único:{newProduct.code}</div>
    <div>Precio: $ {newProduct.price}</div>
    <div>Stock: {newProduct.stock}</div>
  </div>;
};

export default AddProducts