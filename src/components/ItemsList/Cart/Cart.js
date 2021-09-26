import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Cart.module.css";

function Cart() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => {
    return state.items.itemsList;
  });
  const cartupdatedItems = useSelector((state) => {
    return state.cart.cartupdatedItems;
  });
  const cartItems = itemsList.filter((item) => item.count > 0);

  return (
    <div className={classes.cart}>
      <h3>Items in your cart</h3>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
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
