import React from 'react';
import Subtotal from "./Subtotal"
import "./Checkout.css"
const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img
          src="https://www.business2community.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"
          alt="checkout-ad"
          className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
