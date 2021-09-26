import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartupdatedItems: [] },
  reducers: {
    onAddingToCart(state, action) {
      state.cartupdatedItems = action.payload;
    },
  },
});
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
