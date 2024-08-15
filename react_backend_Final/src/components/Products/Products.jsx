import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CustomButton } from '../generics/genericsModules'


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
        <div>
            {products.map((products) => (<Card key={products._id}>
                <Card.Body>
                    <Card.Title>Título: {products.title}</Card.Title>
                    <Card.Text>Descripción: {products.description}</Card.Text>
                    <Card.Text>Código único:{products.code}</Card.Text>
                    <Card.Text>Precio: $ {products.price}</Card.Text>
                    <Card.Text>Stock: {products.stock}</Card.Text>
                    <CustomButton title={"Agregar al carrito"} />
                </Card.Body>
            </Card>))}
        </div>
    )
}

export default Products