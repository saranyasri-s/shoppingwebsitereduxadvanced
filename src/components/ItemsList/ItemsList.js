import React from "react";
import Item from "./Item/Item";
import { useState } from "react";
import { itemsActions } from "../Store/Items";
import { cartActions } from "../Store/Cart";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ItemsList.module.css";
function ItemsList() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => {
    return state.items;
  });

  const onAddHandler = (id) => {
    const index = itemsList.findIndex((x) => x.id === id);

    dispatch(itemsActions.add(index));
  };
  const onLessHandler = (id) => {
    const index = itemsList.findIndex((x) => x.id === id);
    dispatch(itemsActions.less(index));
  };
  return (
    <div className={classes.ItemsList}>
      {itemsList.map((item) => {
        return (
          <ul>
            <Item
              onAdd={onAddHandler}
              onLess={onLessHandler}
              price={item.price}
              count={item.count}
              id={item.id}
              itemName={item.itemName}
            ></Item>
          </ul>
        );
      })}
    </div>
  );
}

export default ItemsList;
