import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { user, isAuthenticated } = useAuthContext()

  return (
    <div>
      {isAuthenticated === false ? (
        <p>Usuario no autenticado. Por favor, inicia sesión.</p>
      ) : (
        <p><Link to={`/api/carts/usercarts`}>Ver Carrito</Link></p>
      )}
    </div>
  )
}
export default Footer