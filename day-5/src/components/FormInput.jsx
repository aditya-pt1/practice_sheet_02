import React from 'react'

const FormInput = ({ register, name, placeholder, required }) => {
  return (
    <input type='text' 
    {...register(name, { required })}
    placeholder={placeholder}
    className="border border-gray-300 p-2 rounded w-full mb-4"
    />
  )
}

export default FormInput