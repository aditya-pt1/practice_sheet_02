import React from 'react'
import {Form, useForm} from 'react-hook-form'
import FormInput from './FormInput'
import FormSubmit from './FormSubmit'
import FormWrapper from './FormWrapper'


const SimpleForm = () => {

  const {register,handleSubmit} = useForm();

  
  const onSubmit = (data) => {
    alert(`You entered: ${data.userInput}`);
  };

  return (
  <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        register={register}
        name="userInput"
        placeholder="Enter something..."
        required
      />
     <FormSubmit  label="Show Alert" />

  </FormWrapper>
  )
}

export default SimpleForm