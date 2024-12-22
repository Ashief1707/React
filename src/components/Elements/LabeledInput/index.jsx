import React from 'react'
import Label from './Label'
import Input from './Input'


const LabeledInput = (props) => {
  const { label, name, type, placeholder,register } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} register={register} />
    </>
  );
};

export default LabeledInput;