import React from 'react'
import './generics.css'
//import {Button} from 'bootstrap'
import Button from 'react-bootstrap/Button';

const CustomBtnDangerDelete = ({title}) => {
  return (
<Button variant="danger" className='btnFonts'>{title}</Button>
)
}

export default CustomBtnDangerDelete

