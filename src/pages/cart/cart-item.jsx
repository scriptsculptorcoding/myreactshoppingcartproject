import React, {useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

/*
The target property of the event object refers to the DOM element that triggered the event. 
It represents the element on which the event occurred.
The value property of e.target is typically used with form input elements (such as <input>, <textarea>, and <select>) 
and represents the current value entered by the user in the input element.
*/
export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}
