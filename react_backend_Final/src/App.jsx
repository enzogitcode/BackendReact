import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Home from './components/generics/Home';
import { Header, Footer} from './components/generics/genericsModules'
import { Login, Profile, Register, UsersList } from './components/Users/userModulo'
import { Products, RealTimeProducts, MyProducts } from './components/Products/modulosProducts'
import AddProducts from './components/Products/AddProducts';
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <main id='divCustomBody'>

        <Routes>
<Route path='/' element={<Home/>}/>
{/* Rutas para usuarios */}
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/api/users' element={<UsersList/>}/>
<Route path='/profile' element={<Profile/>}/>
{/* Rutas de productos */}
<Route path='/addproducts' element={<AddProducts/>}/>
<Route path='/myproducts' element={<MyProducts/>}/>
<Route path='/api/products' element={<Products/>}/>
<Route path='/api/products/:pid' element={<Products/>}/>
{/* Rutas del carrito */}

{/* Ruta inexistente */}
 {/* <Route path='/*' element={<Error/>}/> */}
        </Routes>
        </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

