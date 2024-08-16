import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CustomInput, CustomButton } from '../generics/genericsModules'
import { Link } from 'react-router-dom';
const r = useRef(); // <- This is your ref


import { useState } from "react"
import axios from "axios"
const RealTimeProducts = () => {

  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    // Handle validations
    axios
      .post("http://localhost:8080/api/products", { title, price, stock, description, category })
      .then(response => {
        console.log(response.data, title, price, stock, description, category)
        response(response.data.success);
        setInput({name: '', email: ''});
        // Handle response
      })
      .catch((error) => console.log(error))


  }
  return (
    <div>
      <form className='bg-white' action="" id="login" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="item">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </p>
        <p className="item">
          <label htmlFor="price"> Price </label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </p>
        <p className="item">
          <label htmlFor="stock"> stock </label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={stock}
            onChange={e => setStock(e.target.value)}
          />
        </p>
        <p className="item">
          <label htmlFor="description"> description </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </p>
        <p className="item">
          <label htmlFor="category"> category </label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </p>
        <p className="item">
          <input type="submit" value="addProduct" />
        </p>
      </form>
    </div>
  )
}

export default RealTimeProducts























/* 
const RealTimeProducts = () => {
  
  return (
    <>
<h1 className="text-center my-5">Agrega un nuevo producto</h1>

<form
  className="d-flex flex-column mx-5 my-4 text-center justify-content-center"
  action="/api/products/"
  method="post"
>
  <label htmlFor="profileMulter">Title</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="title"
    id="profileMulter"
  />

  <label htmlFor="productsMulter">Category</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="category"
    id="productsMulter"
  />

  <label htmlFor="documentsMulter">Price</label>
  <input
    className="text-center border my-3 border border-danger"
    type="number"
    name="price"
    id="documentsMulter"
  />

  <label htmlFor="productsMulter">Description</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="description"
    id="productsMulter"
  />

  <label htmlFor="productsMulter">Stock</label>
  <input
    className="text-center border my-3 border border-danger"
    type="number"
    name="stock"
    id="productsMulter"
  />

<button type="submit">Submit</button>
</form>
</>
    )
}

export default RealTimeProducts */