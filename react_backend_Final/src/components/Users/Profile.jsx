import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const Profile = () => {

  const { user } = useAuthContext()
  const first_name = user?.user?.first_name
  const last_name = user?.user?.last_name
  const age = user?.user?.age
  const email = user?.user?.email
  const role = user?.user?.role

  if (user !== undefined) {
    return (
      <div className='profileContainer text-center py-4 mx-2 flex-column rounded-pill bg-white'>
        <h1>Bienvenido a tu perfil</h1>
        <p>Nombre: {first_name}</p>
        <p>Apellido: {last_name}</p>
        <p>Edad: {age}</p>
        <p>Email: {email}</p>
        <p>Rol: {role}</p>
        {
          role == 'user' ?
            <p><Link to={`/users/upload`}>Cargar Documentos</Link></p>
            :
            null
        }
      </div>
    )
  }
  else {
    return (
      <div>Hola este es tu perfil</div>
    )
  }
}

export default Profile