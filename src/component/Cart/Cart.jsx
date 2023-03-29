import React from "react";
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    // console.log(cart);
    let total = 0 ;
    let tax = 0;
    let GrandTotal = 0;
    for (const product of cart){
      total = total + product.price;
      tax = total * 10/100;
      GrandTotal = total+tax;
    }
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      
    <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${GrandTotal.toFixed(2)}</h4>
      <button>
        Clear Cart <FontAwesomeIcon icon={faDeleteLeft} />
      </button>{" "}
      <br />
      <button className="btn2">
        Review Order <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  );
};

export default Cart;
