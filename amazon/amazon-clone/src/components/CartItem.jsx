import React from 'react';
import "./CartItem.css"

const CartItem = ({ itemData }) => {
  return (
    <div className='cartItem'>
      <img class = "cartItem__image" src={itemData.image} alt={ImageData.title} />

      <div className="cartItem__info">
        <h2>{itemData.title}</h2>
        <p>In Stock</p>
        <p>Sold by Garg Enterproses Bhiwani</p>
        <p>Gift Option not available</p>
        <input type="text" name="quantity" id="cartItem__quantity" value={itemData.qty} />
      </div>
    </div>

  );
}

export default CartItem;
