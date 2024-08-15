import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, Footer} from './components/generics/genericsModules'
import {Login, Register} from './components/Users/userModulo'
import {Products} from './components/Products/modulosProducts'
import {UsersList} from './components/Users/userModulo'
export default function App() {
  return (
    <div>
      <Header/>
<UsersList/>
      <Footer/>
    </div>
  )
}

