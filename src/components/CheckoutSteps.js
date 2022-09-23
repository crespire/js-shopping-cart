import React, { useContext } from 'react';
import CartLine from './CartLine';
import { CartContext, CurrencyContext } from './Store';

function StepOne(props) {
  const { checkoutInformation, checkoutNext, handleInput } = props;

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li className="font-bold">Contact Details</li>
            <li>Shipping Details</li>
            <li>Billing Details</li>
            <li>Confirm Order</li>
          </ol>
        </span>
      </div>
      
      <div className="flex flex-col grow">
        <span>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" placeholder="Person Doe" value={checkoutInformation['name']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" placeholder="email@example.com" value={checkoutInformation['email']} onChange={handleInput} required />
        </span>
      </div>

      <div className="flex basis-0">
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>Next</button>
      </div>      
    </div>
  );
}

function StepTwo(props) {
  const { checkoutInformation, checkoutNext, handleInput } = props;

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li>Contact Details</li>
            <li className="font-bold">Shipping Details</li>
            <li>Billing Details</li>
            <li>Confirm Order</li>
          </ol>
        </span>
      </div>

      <div className="flex flex-col grow">
        <span>
          <label htmlFor="address-street">Street: </label>
          <input type="text" name="address-street" placeholder="2A-123 East Street" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="address-city">City: </label>
          <input type="text" name="address-city" placeholder="Cityville" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="address-area">State/Province: </label>
          <input type="text" name="address-area" placeholder="Ontario" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="address-country">Country: </label>
          <input type="text" name="address-country" placeholder="Canada" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="address-post">ZIP/Post Code: </label>
          <input type="text" name="address-post" placeholder="12345" value={checkoutInformation['address']} onChange={handleInput} required />
        </span>
      </div>

      <div className="flex basis-0">
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>Next</button>
      </div> 
    </div>
  );
}

function StepThree(props) {
  const { checkoutInformation, checkoutNext, handleInput } = props;

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li>Contact Details</li>
            <li>Shipping Details</li>
            <li className="font-bold">Billing Details</li>
            <li>Confirm Order</li>
          </ol>
        </span>
      </div>

      <div className="flex flex-col grow">
        <span>
          <label htmlFor="card-number">Card Number: </label>
          <input name="card-number" type="text" placeholder="1234536710254612" value={checkoutInformation['card-number']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="card-exp">Card Exp: </label>
          <input name="card-exp" type="text" placeholder="12/23" pattern="^[\d]{1,2}\/[\d]{2}$" value={checkoutInformation['card-exp']} onChange={handleInput} required />
        </span>

        <span>
          <label htmlFor="card-sec">Security Code: </label>
          <input name="card-sec" type="text" placeholder="123" pattern="^\d{3}$" value={checkoutInformation['card-sec']} onChange={handleInput} required />
        </span>
      </div>

      <div className="flex basis-0">
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>Next</button>
      </div> 
    </div>
  );
}

function StepFour(props) {
  const { cart, checkoutInformation, checkoutNext } = props;
  const currencyFormatter = useContext(CurrencyContext);
  const cartTotal = useContext(CartContext);

  return (
    <div className="flex flex-col space-y-4 h-full justify-between">
      <div className="basis-0">
        <h3 className="text-2xl">Checkout</h3>
        <span>
          <ol className="list-decimal">
            <li>Contact Details</li>
            <li>Shipping Details</li>
            <li>Billing Details</li>
            <li className="font-bold">Confirm Order</li>
          </ol>
        </span>
      </div>

      <div className="flex flex-col grow">
        <span className="text-xl"><strong>Your Checkout Information</strong></span>
        <div>
          <ul>
            <li>Name: {checkoutInformation['name']}</li>
            <li>Email: {checkoutInformation['email']}</li>
            <li>
              <strong>Address</strong><br />
              {checkoutInformation['address-street']}<br />
              {checkoutInformation['address-city']}, {checkoutInformation['address-area']}<br />
              {checkoutInformation['address-country']}  {checkoutInformation['address-post']}
            </li>
            <li>
              <strong>Card Information</strong><br />
              Last four digits: {checkoutInformation['card-number'].slice(-4)}<br />
              Expiry: {checkoutInformation['card-exp']}<br />
              Security Code: {checkoutInformation['card-sec']}
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
        <button className="grow p-2 background-slate-300 border-2 border-solid border-black" onClick={checkoutNext}>Submit Order</button>
      </div> 
    </div>
  );
}

export { StepOne, StepTwo, StepThree, StepFour };
