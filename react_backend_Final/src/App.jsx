import './App.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Home from './components/Generics/Home';
import { Header, Footer, CustomError } from './components/Generics/genericsModules'
import { Login, Profile, Register, UsersList, UploadDocs } from './components/Users/userModulo'
import { Products, MyProducts, ProductDetails, AddProducts } from './components/Products/modulosProducts'
//import UpdateProduct from './components/Products/updateProduct.jsx';
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx';
import MyProductDetails from './components/Products/MyProductDetails.jsx';
export default function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <main id='divCustomBody'>

              <Routes>
                <Route path='/' element={<Home />} />
                {/* Rutas para usuarios */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/api/users' element={<UsersList />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/users/upload' element={<UploadDocs />} />
                {/* Rutas de productos */}
                <Route path='/addproducts' element={<AddProducts />} />
                <Route path='/myproducts' element={<MyProducts />} />
                <Route path='/api/products' element={<Products />} />
                <Route path='/api/products/:pid' element={<ProductDetails />} />
                <Route path='/api/products/myproductdetails/:pid' element={<MyProductDetails />} />
                {/* Rutas del carrito */}

                {/* Ruta inexistente */}
                <Route path='*' element={<CustomError />} />

              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

