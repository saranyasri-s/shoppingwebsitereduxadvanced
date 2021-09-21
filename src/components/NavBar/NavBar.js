import React from "react";
import classes from "./NavBar.module.css";
import { cartToggleActions } from "../Store/CartToggle";
import { useDispatch } from "react-redux";
function NavBar() {
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(cartToggleActions.toggle());
  };
  return (
    <header className={classes.Header}>
      <h3>SaranShop</h3>
      <div>
        <button onClick={onToggle}>My Cart</button>
      </div>
    </header>
  );
}

export default NavBar;
