import React, { useState, useContext, useEffect } from 'react';
import CartLine from './CartLine';
import { CartContext, CurrencyContext } from './Store';

function StepOne(props) {
  const { checkoutInformation, handleInput, checkoutNext } = props;
  const [errors, setErrors] = useState([null]);
  const { name, email, addressStreet, addressCity, addressArea, addressCountry, addressPost } = checkoutInformation;

  const validateStep = () => {
    setErrors([]);
    if (name.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Name is required.']) }
    if (email.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Email is required.']) }
    if (email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrors(oldErrors => [...oldErrors, 'Email format is invalid.']) }
    if (addressStreet.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Street is required.']) }
    if (addressCity.length <= 0) { setErrors(oldErrors => [...oldErrors, 'City is required.']) }
    if (addressCountry.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Country is required.']) }
    if (addressPost.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Postal is required.']) }
    if (addressPost.length > 0 && !/^(?:\d{5})|(?:\w{1}\d{1}\w{1}\s?\d{1}\w{1}\d{1})$/.test(addressPost)) { setErrors(oldErrors => [...oldErrors, 'Postal code format not recognized.']) }
  }

  const renderNext = (checkoutStep) => {
    let buttonText;

    if (errors.length > 0) {
      buttonText = 'Fix form errors to continue.';
    } else {
      buttonText = checkoutStep === 3 ? 'Submit Order' : 'Next';
    }
  
    return <button disabled={!(errors.length === 0)} className="disabled:opacity-50 disabled:border-slate-500 grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>{buttonText}</button>;
  }

  useEffect(() => {
    validateStep();
  }, [name, email, addressStreet, addressCity, addressArea, addressCountry, addressPost])

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li className="font-bold">Customer Details</li>
            <li>Billing Details</li>
            <li>Confirm Order</li>
          </ol>
        </span>
      </div>
      
      <form className="flex flex-col grow space-y-2">

        { errors.length > 0 &&
          <div className="flex flex-col grow-0 border border-rose-500">
            <ul>
              { errors.map((error, i) => { return <li key={i}>{error}</li> }) }
            </ul>
          </div>
        }

        <span>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" placeholder="Person Doe" value={checkoutInformation['name']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" placeholder="email@example.com" value={checkoutInformation['email']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="addressStreet">Street: </label>
          <input type="text" name="addressStreet" placeholder="2A-123 East Street" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="addressCity">City: </label>
          <input type="text" name="addressCity" placeholder="Cityville" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="addressArea">State/Province: </label>
          <input type="text" name="addressArea" placeholder="Ontario" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="addressCountry">Country: </label>
          <input type="text" name="addressCountry" placeholder="Canada" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="addressPost">ZIP/Post Code: </label>
          <input type="text" name="addressPost" placeholder="12345 or A1B2C3" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>
      </form>

      <div className="flex basis-0">
        { renderNext(1) }
      </div>   
    </div>
  );
}

function StepTwo(props) {
  const { checkoutInformation, handleInput, checkoutNext } = props;
  const [errors, setErrors] = useState([null]);
  const { cardNumber, cardExp, cardSec } = checkoutInformation;

  const validateStep = () => {
    setErrors([]);
    if (cardNumber.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Card is required.']) }
    if (cardNumber.length > 0 && !/^[\d]{16}$/.test(cardNumber)) { setErrors(oldErrors => [...oldErrors, 'Card number is invalid.']) }
    if (cardExp.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Expiry is required.']) }
    if (cardExp.length > 0 && !/^[\d]{2}\/[\d]{2}$/.test(cardExp)) { setErrors(oldErrors => [...oldErrors, 'Expiry is not valid.']) }
    if (cardSec.length <= 0) { setErrors(oldErrors => [...oldErrors, 'Security code is required.']) }
    if (cardSec.length > 0 && !/^[\d]{3}$/.test(cardSec)) { setErrors(oldErrors => [...oldErrors, 'Security code is not valid.']) }
  }

  const renderNext = (checkoutStep) => {
    let buttonText;

    if (errors.length > 0) {
      buttonText = 'Fix form errors to continue.';
    } else {
      buttonText = checkoutStep === 3 ? 'Submit Order' : 'Next';
    }

    return <button disabled={!(errors.length === 0)} className="disabled:opacity-50 disabled:border-slate-500 grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>{buttonText}</button>;
  }

  useEffect(() => {
    validateStep();
  }, [cardNumber, cardExp, cardSec])

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li>Customer Details</li>
            <li className="font-bold">Billing Details</li>
            <li>Confirm Order</li>
          </ol>
        </span>
      </div>

      <form className="flex flex-col grow space-y-2">

        { errors.length > 0 &&
          <div className="flex flex-col grow-0 border border-rose-500">
            <ul>
              { errors.map((error, i) => { return <li key={i}>{error}</li> }) }
            </ul>
          </div>
        }

        <span>
          <label htmlFor="cardNumber">Card Number: </label>
          <input name="cardNumber" type="text" placeholder="1234536710254612" value={checkoutInformation['card-number']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="cardExp">Card Exp: </label>
          <input name="cardExp" type="text" placeholder="12/23" pattern="^[\d]{1,2}\/[\d]{2}$" value={checkoutInformation['card-exp']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="cardSec">Security Code: </label>
          <input name="cardSec" type="text" placeholder="123" pattern="^\d{3}$" value={checkoutInformation['card-sec']} onChange={handleInput} required />
        </span>
      </form>

      <div className="flex basis-0">
        { renderNext(2) }
      </div>  
    </div>
  );
}

function StepThree(props) {
  const { cart, checkoutInformation, checkoutNext } = props;
  const currencyFormatter = useContext(CurrencyContext);
  const cartTotal = useContext(CartContext);

  const renderNext = (checkoutStep) => {
    let result;
    let buttonText = checkoutStep === 3 ? 'Submit Order' : 'Next';
  
    result = <button className="disabled:opacity-50 disabled:border-slate-500 grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>{buttonText}</button>
  
    return result;
  }

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li>Customer Details</li>
            <li>Billing Details</li>
            <li className="font-bold">Confirm Order</li>
          </ol>
        </span>
      </div>

      <div className="flex flex-col grow space-y-2">
        <span className="text-xl"><strong>Your Checkout Information</strong></span>
        <div>
          <ul>
            <li>Name: {checkoutInformation['name']}</li>
            <li>Email: {checkoutInformation['email']}</li>
            <li>
              <strong>Address</strong><br />
              {checkoutInformation['addressStreet']}<br />
              {checkoutInformation['addressCity']}, {checkoutInformation['addressArea']}<br />
              {checkoutInformation['addressCountry']}  {checkoutInformation['addressPost']}
            </li>
            <li>
              <strong>Card Information</strong><br />
              Last four digits: {checkoutInformation['cardNumber'].slice(-4)}<br />
              Expiry: {checkoutInformation['cardExp']}<br />
              Security Code: {checkoutInformation['cardSec']}
            </li>
          </ul>
        </div>

        <span className="text-xl"><strong>Cart Contents</strong></span>
        <table className="text-left">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>$</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((entry, i) => {
                return (
                  <CartLine key={entry.item.name} item={entry.item} i={i} quantity={entry.quantity} />
                )
              })
            }
          </tbody>
        </table>
        <div className="flex flex-col">
          <span className="pb-2 text-right">Cart Total: {currencyFormatter.format(cartTotal)}</span>
        </div>
      </div>

      <div className="flex basis-0">
        { renderNext(3) }
      </div>
    </div>
  );
}

export { StepOne, StepTwo, StepThree };
