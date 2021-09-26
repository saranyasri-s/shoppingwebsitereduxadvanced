import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    itemsList: [],
  },
  reducers: {
    itemsListFetch(state, action) {
      state.itemsList = action.payload;
    },
    add(state, action) {
      let c = action.payload;

      state.itemsList[c].count++;
    },
    less(state, action) {
      let c = action.payload;
      if (state.itemsList[c].count > 0) {
        state.itemsList[c].count--;
      }
    },
  },
});
export const fetchItemsList = () => {
  return (dispatch) => {
    const fetcheditems = [
      { id: "tshirt", itemName: "tshirt", price: "500", count: "0" },
      { id: "gown", itemName: "gown", price: "500", count: "0" },
      { id: "saree", itemName: "saree", price: "500", count: "0" },
    ];
    dispatch(itemsSlice.actions.itemsListFetch(fetcheditems));
  };
};
export const itemsActions = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
// this comment is created just to check github authentication//
