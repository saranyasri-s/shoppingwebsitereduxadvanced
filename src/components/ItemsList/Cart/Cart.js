import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
function Cart() {
  const itemsList = useSelector((state) => {
    return state.items;
  });
  const cartItems = itemsList.filter((item) => item.count > 0);
  return (
    <div className={classes.cart}>
      <h3>Items in your cart</h3>
      {cartItems.map((item) => {
        return (
          <div>
            <p>
              {item.itemName}- {item.count}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
