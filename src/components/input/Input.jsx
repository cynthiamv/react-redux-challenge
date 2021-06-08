import React from 'react';
import { InputContainer } from './Input.style';

const Input = ({ labelName, type, name, placeholder }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{labelName}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} required/>
    </InputContainer>
  )
}

export default Input;