import React from "react";
import classes from "./NavBar.module.css";
function NavBar() {
  return (
    <header className={classes.Header}>
      <h3>SaranShop</h3>
      <div>
        <button>My Cart</button>
      </div>
    </header>
  );
}

export default NavBar;
