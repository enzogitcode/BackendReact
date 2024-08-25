import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signin, isAuthenticated } = useAuthContext()
  const onSubmit = handleSubmit((data) => {
    signin(data)
    console.log(data)
  })
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) { navigate('/profile') }
  }, [isAuthenticated])

  return (
    <div className='py-4'>
      <form className='d-flex flex-column px-5 gap-2' action="" onSubmit={onSubmit}>
        <input placeholder='email' name='email' type="email" {...register("email", { required: true })} />
        <input placeholder='password' name='password' type="password" {...register("password", { required: true })} />
        <button type='submit' className='rounded-pill'>Login</button>
      </form>
    </div>
  )
}

export default Login