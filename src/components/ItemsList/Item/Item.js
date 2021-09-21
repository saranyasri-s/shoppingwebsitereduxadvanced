import React from "react";
import classes from "./Item.module.css";
function Item(props) {
  const addHandler = () => {
    props.onAdd(props.id);
  };
  const lessHandler = () => {
    props.onLess(props.id);
  };
  return (
    <li className={classes.item}>
      <div className={classes.itemDescription}>
        <p className={classes.itemName}>{props.itemName}</p>
        <div className={classes.priceAndCount}>
          <p>Rs {props.price}</p>
          <p className={classes.count}>{props.count}</p>
        </div>
      </div>

      <div className={classes.buttons}>
        <button onClick={addHandler}>More</button>
        <button onClick={lessHandler}>Less</button>
      </div>
    </li>
  );
}

export default Item;
