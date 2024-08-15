import React from 'react'
import './users.css'
import { CustomButton, CustomInput, CustomBtnDangerDelete } from '../generics/genericsModules'

const Login = () => {

  return (
    <div id='divLogin'
      className='text-center d-flex flex-wrap flex-column align-items-center my-3'>
      <h2>Login</h2>
      <form action="">
        <CustomInput
          inputName={'email'}
          inputType={'email'}
          inputPlaceholder={'E-mail'}
          labelText={'Email'}
        />
        <CustomInput
          inputName={'password'}
          inputType={'password'}
          inputPlaceholder={'Password'}
          labelText={'Password'}
        />
        <CustomButton title={"Login"} />
      </form>
      <p className='text-center'>¿Aún no estas registrado?</p>
      <a href="">Registrate</a>
    </div>
  )
}

export default Login