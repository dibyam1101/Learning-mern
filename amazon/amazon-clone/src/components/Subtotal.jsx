import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat

        value={4000}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => {

          return (
            <div>
              <p>Subtotal (0 items): <strong>{value}</strong> </p>
              <small className="subtotal__gift">
                <input type="checkbox" />This order contains a gift
              </small>
            </div>
          );
        }}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
