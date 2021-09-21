import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart";
import { itemsReducer } from "./Items";
import { cartToggleReducer } from "./CartToggle";
const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
    cartToggle: cartToggleReducer,
  },
});
export default store;
