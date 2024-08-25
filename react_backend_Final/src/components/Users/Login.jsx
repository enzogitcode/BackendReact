import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AllContext'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signin } = useAuth()
  const onSubmit = handleSubmit((data) => {
    signin(data)
    console.log(data)
  })
  
  return (
    <div className='py-4'>
      <form className='d-flex flex-column px-5 gap-2' action="" onSubmit={onSubmit}>
        <input placeholder='email' name='email' type="email" {...register("email", { required: true })} />
        <input placeholder='password'name='password' type="password" {...register("password", { required: true })} />
      <button type='submit' className='rounded-pill'>Login</button>
      </form>
    </div>
  )
}

export default Login