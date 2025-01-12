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

    incressQuantity: (state, action) => {
      const existingBook = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingBook) {
        existingBook.quantity += 1;
      }
    },

    singleDelete: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    allRemove: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTocart, allRemove, singleDelete } = bookSlice.actions;

export default bookSlice.reducer;
