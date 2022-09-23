import React from 'react';
import { StepOne, StepTwo, StepThree, StepFour } from './CheckoutSteps';

function Checkout(props) {
  const {cart, toggleCheckout, checkoutInformation, setCheckoutInformation, checkoutStep, checkoutNext, checkoutBack} = props;

  const renderButtons = (checkoutStep) => {
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

  const handleInput = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const prop = target.name;

    setCheckoutInformation(oldInfo => {
      return {...oldInfo, [prop]: value};
    })
  }
  

  const renderStep = (checkoutStep) => {
    let result;

    switch(checkoutStep) {
      case 1:
        result = <StepOne checkoutInformation={checkoutInformation} checkoutNext={checkoutNext} handleInput={handleInput} />
        break;
      case 2:
        result = <StepTwo checkoutInformation={checkoutInformation} checkoutNext={checkoutNext} handleInput={handleInput} />;
        break;
      case 3:
        result = <StepThree checkoutInformation={checkoutInformation} checkoutNext={checkoutNext} handleInput={handleInput} />;
        break;
      case 4:
        result = <StepFour cart={cart} checkoutInformation={checkoutInformation} checkoutNext={checkoutNext} />;
        break;
      default:
        result = <div>Error</div>
    }

    return result;
  }

  return (
    <div className="flex flex-col p-4 space-y-4 h-full justify-between">
      <div className="flex gap-2">
        { renderButtons(checkoutStep) }
      </div>
      <div className="flex flex-col gap-2 h-full grow">
        { renderStep(checkoutStep) }
      </div>      
    </div>
  );
}

export default Checkout;
