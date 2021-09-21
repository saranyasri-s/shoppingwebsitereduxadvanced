import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart";
import { itemsReducer } from "./Items";
const store = configureStore({
  reducer: { items: itemsReducer, cart: cartReducer },
});
export default store;
