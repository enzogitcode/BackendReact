import axios from 'axios';
import React, { useState } from 'react'

const RealTimeProducts = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')

  const newProduct = { title, category, price, stock, description }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:8080/api/products', { ...newProduct })
        .then(response => { console.log(response) })
      setTitle("")
      setPrice("")
      setDescription("")
      setStock("")
      setCategory("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='d-flex flex-column'>

      <form action="" onSubmit={handleSubmit}>
        <input name='title' value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor='title' className='bg-white'>Title</label>

        <input name='description' value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor='description' className='bg-white'>Description</label>

        <input type='number' name='Price' value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <label htmlFor='Price' className='bg-white'>Price</label>

        <input type='number' name='Stock' value={stock}
          onChange={(e) => setStock(e.target.value)} />
        <label htmlFor='Stock' className='bg-white'>Stock</label>

        <input name='description' value={category}
          onChange={(e) => setCategory(e.target.value)} />
        <label htmlFor='description' className='bg-white'>Category</label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RealTimeProducts