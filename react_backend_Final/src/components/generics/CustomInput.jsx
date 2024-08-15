import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CustomInput =({inputName, inputType, inputId, inputPlaceholder, labelFor, labelText}) => {
  
  return (
    <div class="form-floating mb-3">
  <input name={inputName} type={inputType} className="form-control" id="floatingInput" placeholder={inputPlaceholder}/>
  <label for="floatingInput">{labelText}</label>
</div>
  );
}

export default CustomInput;