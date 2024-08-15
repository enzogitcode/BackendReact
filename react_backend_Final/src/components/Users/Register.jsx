import { CustomInput, CustomButton } from '../generics/genericsModules'
const Register = () => {
  return (
    <div id='register'
      className='text-center d-flex flex-wrap flex-column align-items-center my-3'>
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
        inputName={'password'}
        inputType={'password'}
        inputPlaceholder={'Password'}
        labelText={'Password'}
      />
      <CustomButton title={"Registrate"}/>
      </form>

    </div>
  )
}

export default Register