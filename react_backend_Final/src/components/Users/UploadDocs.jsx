import React from 'react'

const UploadDocs = () => {
  
  
  return (
    <div className='text-center'>
      <form className='d-flex flex-column justify-content-center' enctype="multipart/form-data">
        <label htmlFor="profilePhoto">Foto de Perfil</label>
        <input type="file" name='profile' />

        <label htmlFor="profilePhoto">Identificación</label>
        <input type="file" name='documents'/>

        <label htmlFor="profilePhoto">Comprobante de Documento</label>
        <input type="file" name='documents' />

        <label htmlFor="profilePhoto">Comprobante de Estado de cuenta</label>
        <input type="file" name='documents' />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default UploadDocs