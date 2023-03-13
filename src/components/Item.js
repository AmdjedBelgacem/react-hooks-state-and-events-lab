import React, { useState } from "react";

function Item({ name, category }) {
  const [cartState, setCartState] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const isInCart = cartState ? "in-cart" : "";
  const isButton = buttonState ? "Add to Cart" : "Remove From Cart";
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>{setCartState(!cartState); setButtonState(!buttonState)}}>{isButton}</button>
    </li>
  );
}

export default Item;
