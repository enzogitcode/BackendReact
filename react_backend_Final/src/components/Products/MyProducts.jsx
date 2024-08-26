import axios from 'axios'
import { useEffect, useState } from 'react'
import { CustomButton } from '../Generics/genericsModules'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'



const MyProducts = () => {
    const { user } = useAuthContext()

    const [products, setProducts] = useState([])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/api/products/')
        setProducts(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    const adminProducts = products.filter((item) => item.owner == user?.user?.email)
console.log(adminProducts)
    return (
        <div className='d-flex flex-wrap gap-6 bg-lightblue'>
            {adminProducts.map ((products) => (<div key={products._id} className='cardProduct text-center d-flex flex-column bg-white m-3 p-2 border-radius-xl text-wrap'>
                    <div>Título: {products.title}</div>
                    <div>Descripción: {products.description}</div>
                    <div>Código único:{products.code}</div>
                    <div>Precio: $ {products.price}</div>
                    <div>Stock: {products.stock}</div>
                    <NavLink to={`/api/products/`}><CustomButton title={"Ver detalles"}/></NavLink>
            </div>))}
        </div>
    )
}

export default MyProducts