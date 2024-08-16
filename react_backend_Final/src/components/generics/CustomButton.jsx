import React from 'react'
    import { Button } from 'react-bootstrap'
    

const CustomButton = ({title, btnType}) => {
  return (
    <button type={btnType} className='btn btn-primary text-center'>{title}</button>
  )
}

export default CustomButton

