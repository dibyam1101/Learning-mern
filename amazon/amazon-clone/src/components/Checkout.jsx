import React, { useState, useEffect } from 'react';
import Subtotal from "./Subtotal"
import "./Checkout.css"
import CartItem from './CartItem';
import { connect } from 'react-redux/es/exports';


const Checkout = ({ cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.price * item.qty;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img
          src="https://www.business2community.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"
          alt="checkout-ad"
          className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {cart.map(item => <CartItem key={item.id} itemData={item} />)}
          {/* <CartItem /> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shopReducer.cart,
  }
}

export default connect(mapStateToProps)(Checkout);
