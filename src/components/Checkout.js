import React, { useEffect } from 'react';
import { StepOne, StepTwo, StepThree } from './CheckoutSteps';
import useForm from '../hooks/useForm';

function Checkout(props) {
  const { cart, toggleCheckout, setCheckoutInformation, checkoutInformation, checkoutStep, checkoutNext, checkoutBack } = props;
  const { values, errors, handleChange, handleSubmit } = useForm(checkoutNext, checkoutInformation);

  const renderTopButtons = (checkoutStep) => {
    let result;

    if (checkoutStep > 1) {
      result = <>
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutBack}>Back</button>
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={toggleCheckout}>Exit</button>
      </>;
    } else {
      result = <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutBack}>Back</button>;
    }
    return result;    
  }

  const renderNext = (checkoutStep) => {
    let buttonText = checkoutStep === 3 ? 'Submit Order' : 'Next';

    return <button type="submit" className="grow p-2 background-slate-300 border-2 border-solid border-black">{buttonText}</button>;
  }

  useEffect(() => {
    setCheckoutInformation(values);
  }, [setCheckoutInformation, values]);

  const renderStep = (checkoutStep) => {
    let result;

    switch(checkoutStep) {
      case 1:
        result = <StepOne values={values} errors={errors} hookHandleInput={handleChange} handleSubmit={handleSubmit} renderNext={renderNext} />
        break;
      case 2:
        result = <StepTwo values={values} errors={errors} hookHandleInput={handleChange} handleSubmit={handleSubmit} renderNext={renderNext} />;
        break;
      case 3:
        result = <StepThree cart={cart} checkoutInformation={values} handleSubmit={handleSubmit} renderNext={renderNext} />;
        break;
      default:
        result = <div>Error</div>
    }

    return result;
  }

  return (
    <div className="flex flex-col p-4 space-y-4 h-full justify-between">
      <div className="flex gap-2">
        { renderTopButtons(checkoutStep) }
      </div>
      <div className="flex flex-col gap-2 h-full grow">
        { renderStep(checkoutStep) }
      </div>

    </div>
  );
}

export default Checkout;
