import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existingBook = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTocart } = bookSlice.actions;

export default bookSlice.reducer;
