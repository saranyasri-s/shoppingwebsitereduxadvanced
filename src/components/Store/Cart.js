import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    onAddingToCart(state, action) {
      state = action.payload;
    },
  },
});
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
