import React from "react";
import Item from "./Item/Item";

import { itemsActions } from "../Store/Items";

import { useSelector, useDispatch } from "react-redux";
import classes from "./ItemsList.module.css";
function ItemsList() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => {
    return state.items.itemsList;
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
              key={item.id}
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
