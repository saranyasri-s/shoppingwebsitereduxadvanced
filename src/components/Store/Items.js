import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [
    { id: "tshirt", itemName: "tshirt", price: "500", count: "0" },
    { id: "gown", itemName: "gown", price: "500", count: "0" },
    { id: "saree", itemName: "saree", price: "500", count: "0" },
  ],
  reducers: {
    add(state, action) {
      let c = action.payload;

      state[c].count++;
    },
    less(state, action) {
      let c = action.payload;
      if (state[c].count > 0) {
        state[c].count--;
      }
    },
  },
});
export const itemsActions = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
