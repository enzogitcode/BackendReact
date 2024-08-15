import React from 'react'
    import { Button } from 'react-bootstrap'
    

const CustomButton = ({title}) => {
  return (
    <button className='btn btn-primary text-center'>{title}</button>
  )
}

export default CustomButton

