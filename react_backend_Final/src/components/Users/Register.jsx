import { Link } from 'react-router-dom'
import { CustomInput, CustomButton } from '../Generics/genericsModules'
const Register = () => {
  return (
    <div id='register'
      className='text-center d-flex flex-wrap flex-column align-items-center my-3'>
              <h2>Register</h2>
<form action="">
      <CustomInput
        inputName={'first_name'}
        inputType={'text'}
        inputPlaceholder={'primer nombre'}
        labelText={'First Name'}
      />
      <CustomInput
        inputName={'last_name'}
        inputType={'text'}
        inputPlaceholder={'last_name'}
        labelText={'Last Name'}
      />
      <CustomInput
        inputName={'age'}
        inputType={'number'}
        inputPlaceholder={'Age'}
        labelText={'Age'}
      />
      <CustomInput
        inputName={'email'}
        inputType={'email'}
        inputPlaceholder={'E-mail'}
        labelText={'E-mail'}
      />
      <CustomInput
        inputName={'password'}
        inputType={'password'}
        inputPlaceholder={'Password'}
        labelText={'Password'}
      />
      <CustomButton title={"Registrate"}/>
      </form>
      <p className='text-center'>¿Aún no estas registrado?</p>
      <Link to={`/login`}>Login</Link>
    </div>
  )
}

export default Register