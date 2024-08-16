import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { CustomButton } from '../generics/genericsModules'
import { Link, NavLink } from 'react-router-dom'
import { ProductDetails } from './modulosProducts'


const Products = () => {
    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/api/products/')
        return setProducts(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='d-flex flex-wrap gap-6 bg-lightblue'>
            {products.map((products) => (<div key={products._id} className='cardProduct text-center d-flex flex-column bg-white m-3 p-2 border-radius-xl text-wrap'>
                    <Card.Title>Título: {products.title}</Card.Title>
                    <Card.Text>Descripción: {products.description}</Card.Text>
                    <Card.Text>Código único:{products.code}</Card.Text>
                    <Card.Text>Precio: $ {products.price}</Card.Text>
                    <Card.Text>Stock: {products.stock}</Card.Text>
                    <NavLink to={`/api/products/`}><CustomButton title={"Ver detalles"}/></NavLink>
            </div>))}
        </div>
    )
}

export default Products