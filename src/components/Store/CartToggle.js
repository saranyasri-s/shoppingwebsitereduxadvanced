import { createSlice } from "@reduxjs/toolkit";

const cartToggle = createSlice({
  name: "cartToggle",
  initialState: { isToggle: false },
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});
export const cartToggleActions = cartToggle.actions;
export const cartToggleReducer = cartToggle.reducer;
