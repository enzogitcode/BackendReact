import axios from 'axios'
import { useEffect, useState } from 'react'
import { CustomButton } from '../Generics/genericsModules'
import { Link, NavLink } from 'react-router-dom'
//import AsideCategories from './AsideCategories'
import { apiURL, getCartById, getProducts } from '../../service/config'
import { useAuthContext } from '../../context/AuthContext'
import config from '../../service/config'

const Products = () => {
    const {user}= useAuthContext()

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response= await getProducts()
        const data= response.data
        setProducts(data)
        
    }
    useEffect(() => {
        fetchData()
    }, [])
const finalProducts= products.filter(products => products.owner !== user?.user?.email)
    return (
        <div className='d-flex flex-wrap px-2 py-2'>
            {/* <AsideCategories /> */}
            <div className="productsContainer d-flex flex-wrap gap-6 gap-6 bg-lightblue">
                {finalProducts.map((products) => (<div key={products._id} className='cardProduct text-center d-flex flex-column bg-white m-3 p-2 border-radius-xl text-wrap'>
                    <div>Título: {products.title}</div>
                    <div>Descripción: {products.description}</div>
                    <div>Código único:{products.code}</div>
                    <div>Precio: $ {products.price}</div>
                    <div>Stock: {products.stock}</div>
                    <NavLink to={`/api/products/${products._id}`}><CustomButton title={"Ver detalles"} /></NavLink>
                    {/* <NavLink onClick={handleDelete}><CustomButton title={"Eliminar"} /></NavLink> */}
                </div>))}
            </div>
        </div>
    )
}

export default Products