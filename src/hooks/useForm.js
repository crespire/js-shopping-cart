import { getStaticContextFromError } from '@remix-run/router';
import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log('Hook handleChange:');
    e.preventDefault();

    let target = e.target;
    let property = target.name;
    let value = target.value;

    console.log(`Got: [${property}]: ${value}`);

    validate(property, value)

    setValues({
      ...values, [property]: value,
    })
  }

  const validate = (property, value) => {
    console.log(`Hook validating ${property} with value: ${value}`);

    const errorSetter = (property, message) => {
      setErrors({
        ...errors, [property]: message
      })
    }

    const errorRemover = (property) => {
      let newErrors = delete errors[property];
      setErrors(newErrors);
    }

    // Specific rules for some properties.
    let regex;
    switch(property) {      
      case 'email':
        regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Please enter a valid email.');
        break;
    
      case 'addressPost':
        regex = /^(?:\d{5})|(?:\w{1}\d{1}\w{1}\s?\d{1}\w{1}\d{1})$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Please enter a valid postal code.');
        break;

      case 'cardNumber':
        regex = /^[\d]{16}$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Card number must be 16 digits.');
        break;

      case 'cardExp':
        regex = /^[\d]{1,2}\/[\d]{2}$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Card expiry is required in format xx/yy.');
        break;

      case 'cardSec':
        regex = /^[\d]{3}$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Card security code must be 3 digits.');
        break;
   
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handling submit...')

    if (Object.keys(errors).length === 0 && Object.keys(values).length > 0) {
      callback();
    }
  }

  return{
    values,
    errors,
    handleChange,
    handleSubmit
  };  
}

export default useForm