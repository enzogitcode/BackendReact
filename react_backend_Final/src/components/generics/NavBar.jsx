import React from 'react'
import './generics.css'
import { Link } from 'react-router-dom'
import {useAuth} from '../../context/AllContext'

const NavBar = () => {
const {user}= useAuth
console.log(user)
//const user= 'null'
  if (user == 'premium') {
    return (
      <nav>
        <ul>
          <li>Rol: premium</li>
          <li><Link to={`/addproducts`} >Agregar un Producto</Link></li>
          <li><Link to={`api/users/products`}>Mis Productos</Link></li>
          <li><Link to={`api/users/products`}></Link></li>
          <li>
            <Link to={`/profile`}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
  else if (user == 'admin') {
    return (
      <nav><ul>
        <li>Rol: Admin</li>
        <li><Link to={`/addproducts`}>Agregar un producto</Link></li>
        <li><Link to={`/myproducts`}>Mis Productos</Link></li>
        <li>
          <Link to={`api/products`}>Todos los productos</Link>
        </li>
        <li>
          <Link to={`api/users`}>Todos los usuarios</Link>
        </li>
        <li>
          <Link to={`/profile`}>
            Profile
          </Link>
        </li>
      </ul>
      </nav>
    )
  }
  else if (user == 'user') {
    return (
      <nav>
        <ul>
          <li>Rol: usuario</li>
          <li><Link to={`api/products`}>Todos los productos</Link></li>
          <li>Chat</li>
          <li>
            <Link to={`/profile`}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
  else {
    return (<nav>
      <ul>
        <li>No hay usuario</li>
        <li><Link to={`/login`}>Login</Link></li>
        <li><Link to={`/register`}>Register</Link></li>
      </ul>
    </nav>
    )
  }
}

export default NavBar