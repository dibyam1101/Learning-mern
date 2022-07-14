import React from "react";
import "./Product.css";
import { connect } from 'react-redux'
import {addToCart} from '../redux/Shopping/shopping-actions'

const Product = ({ productData , addToCart}) => {
  console.log(productData);
  return (
    <div className="product">
      <div className="product__info">
        <p>{productData.title}</p>

        <div className={"product__price"}>
          <small>$</small>
          <strong>{productData.price}</strong>
        </div>

        <div className="product__rating">
          {Array(productData.rating).fill().map((_, i) =>
            <p>⭐</p>
          )}
        </div>
      </div>

      <img
        className="product__image"
        src={productData.image}
        alt="product"
      />
      <button onClick={() => {addToCart(productData.id)}}>Add to Basket</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))

  }
}

export default connect(null, mapDispatchToProps)(Product);
