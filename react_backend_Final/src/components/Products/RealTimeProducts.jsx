import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CustomInput, CustomButton } from '../generics/genericsModules'
import { Link } from 'react-router-dom';

const RealTimeProducts = () => {
  return (
    <>
<h1 className="text-center my-5">Agrega un nuevo producto</h1>

<form
  className="d-flex flex-column mx-5 my-4 text-center justify-content-center"
  action="/api/products/"
  method="post"
>
  <label for="profileMulter">Title</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="title"
    id="profileMulter"
  />

  <label for="productsMulter">Category</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="category"
    id="productsMulter"
  />

  <label for="documentsMulter">Price</label>
  <input
    className="text-center border my-3 border border-danger"
    type="number"
    name="price"
    id="documentsMulter"
  />

  <label for="productsMulter">Description</label>
  <input
    className="text-center border my-3 border border-danger"
    type="text"
    name="description"
    id="productsMulter"
  />

  <label for="productsMulter">Stock</label>
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

export default RealTimeProducts