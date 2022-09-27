import React, { useContext } from 'react';
import CartLine from './CartLine';
import { CartContext, CurrencyContext } from './Store';

function StepOne(props) {
  const { values, errors, hookHandleInput, handleSubmit, renderNext } = props;

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
      
      <div className="flex flex-col grow">
        <form className="flex flex-col grow" onSubmit={handleSubmit}>
          <div className="flex flex-col grow space-y-2">
            <span>
              <label htmlFor="name">Name: </label>
              <input name="name" type="text" placeholder="Person Doe" value={values['name'] || ''} onChange={hookHandleInput} required />
              { errors.name && <p className="border border-rose-500 border-solid">{errors.name}</p>}
            </span>

            <span>
              <label htmlFor="email">Email: </label>
              <input name="email" type="email" placeholder="email@example.com" value={values['email'] || ''} onChange={hookHandleInput} required />
              { errors.email && <p className="border border-rose-500 border-solid">{errors.email}</p>}
            </span>

            <span>
              <label htmlFor="addressStreet">Street: </label>
              <input type="text" name="addressStreet" placeholder="2A-123 East Street" value={values['addressStreet'] || ''} onChange={hookHandleInput} required />
              { errors.addressStreet && <p className="border border-rose-500 border-solid">{errors.addressStreet}</p>}
            </span>

            <span>
              <label htmlFor="addressCity">City: </label>
              <input type="text" name="addressCity" placeholder="Cityville" value={values['addressCity'] || ''} onChange={hookHandleInput} required />
              { errors.addressCity && <p className="border border-rose-500 border-solid">{errors.addressCity}</p>}
            </span>

            <span>
              <label htmlFor="addressArea">State/Province: </label>
              <input type="text" name="addressArea" placeholder="Ontario" value={values['addressArea'] || ''} onChange={hookHandleInput} required />
              { errors.addressArea && <p className="border border-rose-500 border-solid">{errors.addressArea}</p>}
            </span>

            <span>
              <label htmlFor="addressCountry">Country: </label>
              <input type="text" name="addressCountry" placeholder="Canada" value={values['addressCountry'] || ''} onChange={hookHandleInput} required />
              { errors.addressCountry && <p className="border border-rose-500 border-solid">{errors.addressCountry}</p>}
            </span>

            <span>
              <label htmlFor="addressPost">ZIP/Post Code: </label>
              <input type="text" name="addressPost" placeholder="12345 or A1B2C3" value={values['addressPost'] || ''} onChange={hookHandleInput} required />
              { errors.addressPost && <p className="border border-rose-500 border-solid">{errors.addressPost}</p>}
            </span>
          </div>

          <div className="flex basis-0">
            { renderNext(1) }
          </div>          
        </form>
      </div>      
    </div>
  );
}

function StepTwo(props) {
  const { values, errors, hookHandleInput, handleSubmit, renderNext } = props;

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

      <div className="flex flex-col grow">
        <form className="flex flex-col grow" onSubmit={handleSubmit}>
          <div className="flex flex-col grow space-y-2">
            <span>
              <label htmlFor="cardNumber">Card Number: </label>
              <input name="cardNumber" type="text" placeholder="1234536710254612" value={values['cardNumber'] || ''} onChange={hookHandleInput} required />
              { errors.cardNumber && <p className="border border-rose-500 border-solid">{errors.cardNumber}</p>}
            </span>

            <span>
              <label htmlFor="cardExp">Card Exp: </label>
              <input name="cardExp" type="text" placeholder="12/23" pattern="^[\d]{1,2}\/[\d]{2}$" value={values['cardExp'] || ''} onChange={hookHandleInput} required />
              { errors.cardExp && <p className="border border-rose-500 border-solid">{errors.cardExp}</p>}
            </span>

            <span>
              <label htmlFor="cardSec">Security Code: </label>
              <input name="cardSec" type="text" placeholder="123" pattern="^\d{3}$" value={values['cardSec'] || ''} onChange={hookHandleInput} required />
              { errors.cardSec && <p className="border border-rose-500 border-solid">{errors.cardSec}</p>}
            </span>
          </div>

          <div className="flex basis-0">
            { renderNext(2) }
          </div>
        </form>      
      </div>
    </div>
  );
}

function StepThree(props) {
  const { cart, checkoutInformation, handleSubmit, renderNext } = props;
  const currencyFormatter = useContext(CurrencyContext);
  const cartTotal = useContext(CartContext);

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

      <form className="flex basis-0" onSubmit={handleSubmit}>
        { renderNext(3) }
      </form>
    </div>
  );
}

export { StepOne, StepTwo, StepThree };
