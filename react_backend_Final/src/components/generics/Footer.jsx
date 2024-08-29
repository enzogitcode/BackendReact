import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { user, isAuthenticated } = useAuthContext()

  return (
    <div>
      {isAuthenticated === false ? (
        <p>Usuario no autenticado. Por favor, inicia sesión.</p>
      ) : (
        
        <h3 className='text-center'><Link to={`/api/carts/usercarts`}>Ver Carrito</Link></h3>
      )}
    </div>
  )
}
export default Footer