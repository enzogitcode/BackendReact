import axios from 'axios'
import { useEffect, useState } from 'react'
import { CustomBtnDangerDelete, CustomButton } from '../Generics/genericsModules'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { deleteProducts, getProducts } from '../../service/config'


const MyProducts = () => {
    const { user } = useAuthContext()

    const [myProducts, setMyProducts] = useState([])
    const fetchData = async () => {
        const response = await getProducts()
        const adminProducts = response.data.filter((item) => item.owner == user?.user?.email)
        setMyProducts(adminProducts)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        user !== null ?
            <div className='d-flex flex-wrap gap-6 bg-lightblue justify-content-center rounded'>
                {myProducts.map((products) => (<div key={products._id} 
                
                className='cardProduct text-center d-flex flex-column bg-white m-3 p-2 border-radius-xl text-wrap'>
                    <div>Título: {products.title}</div>
                    <div>Descripción: {products.description}</div>
                    <div>Código único:{products.code}</div>
                    <div>Precio: $ {products.price}</div>
                    <div>Stock: {products.stock}</div>
                    <div className="btnContainer d-flex gap-2">
                        <NavLink to={`/api/products/myproductdetails/${products._id}`}><CustomButton title={"Ver Detalles"} /></NavLink>
                    </div>
                </div>))
                }
            </div >
            :
            <div className='text-center'>
                No tienes productos publicados
            </div>
    )
}

export default MyProducts