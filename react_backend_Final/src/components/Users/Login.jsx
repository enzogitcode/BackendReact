import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signin, isAuthenticated } = useAuthContext()
  const onSubmit = handleSubmit((data) => {
    signin(data)
  })
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) { navigate('/profile') }
  }, [isAuthenticated])

  return (
    <div className='py-4 text-center'>
      <h1>Formulario de Login</h1>
      <form className='d-flex flex-column m-2 px-5 gap-4' action="" onSubmit={onSubmit}>
        <input placeholder='email' name='email' type="email" {...register("email", { required: true })} />
        <input placeholder='password' name='password' type="password" {...register("password", { required: true })} />
        <button type='submit' className='rounded-pill mx-5 fs-4'>Login</button>
      </form>
      <h3>¿No está registrado aún?</h3>
      <Link to={`/register`}>Register</Link>
    </div>
  )
}

export default Login