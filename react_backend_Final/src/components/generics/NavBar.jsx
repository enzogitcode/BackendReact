import React from 'react'
import './generics.css'

const NavBar = () => {
  const user= 'premium'
        if (user == 'admin'  ) {
          return (
            <nav>
        <ul>
          <li>Rol: premium</li>
          <li>Mis Productos</li>
          <li>Profile</li>
        </ul>
        </nav>
        )
      }
        else if (user == 'premium') {
          return (
        <nav><ul>
          <li>Rol: Premium</li>
          <li>Mis Productos</li>
          <li>Todos los productos</li>
          <li>Profile</li>
          </ul>
          </nav>
          )
        }
        else if (user == 'user') {
          return (
            <nav>
        <ul>
          <li>Rol: usuario</li>
          <li>Productos</li>
          <li>Chat</li>
          <li>Profile</li>
          </ul>
          </nav>
          )
        }
        else {
          return (<nav>
            <ul>
            <li>No hay usuario</li>
              <li>Login</li>
              <li>Registrate</li>
            </ul>            
          </nav>
          )
        }
}

export default NavBar