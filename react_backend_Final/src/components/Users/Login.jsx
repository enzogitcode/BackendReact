import React from 'react'
import { useState } from 'react'
import './users.css'
import axios from 'axios'

import { CustomButton, CustomInput, CustomBtnDangerDelete } from '../generics/genericsModules'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    axios.post("https://localhost:8080/api/users/login", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
  };

  return (
    <div id='divLogin'
      className='text-center d-flex flex-wrap flex-column align-items-center my-3'>
      <h2>Login</h2>
      <form
      onSubmit={handleSubmit}
        className="px-5"
        id="formLoginContainer"
      >
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
          value={data.password}
          onChange={handleChange}
        />
        <CustomButton title={"Login"} btnType={"onSubmit"}/>
      </form>
      <p className='text-center'>¿Aún no estas registrado?</p>
      <Link to={`/register`}>Registrate</Link>
    </div>
  )
}

export default Login