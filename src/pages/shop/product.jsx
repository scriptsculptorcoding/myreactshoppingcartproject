import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
  <div className="product">
    <img src={productImage} />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p>${price}</p>
    </div>
    <button className="addToCartBttn" onClick = {() => addToCart(id)}>
       Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>} </button>
  </div>
)};


/*cartItemCount > 0 && ...: This is a conditional expression. It checks if the cartItemCount is greater than 0. 
If this condition is true, the expression after the && operator will be evaluated. 
If the condition is false, the entire expression will be false, and nothing will be rendered.*/
