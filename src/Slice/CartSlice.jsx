import { createSlice } from "@reduxjs/toolkit";

export const addCart = createSlice({
  name: "addToCart",
  initialState: {
    data: [],
    finleAmt: 0,
  },
  reducers: {
    addtoCart: (state, action) => {
      action.payload.qty = 1;
      action.payload.total = action.payload.price;
      let cartData = [...state.data, action.payload];
      state.data = cartData;

      let gTotal = 0;
      cartData.map((item) => {
        gTotal += item.total;
      });
      state.finleAmt = gTotal;
      state.finleAmt = state.data.reduce(
        (total, item) => total + item.total,
        0
      );
    },
    incrementData: (state, action) => {
      const index = action.payload;
      state.data[index].qty++;
      state.data[index].total = state.data[index].price * state.data[index].qty;
      state.finleAmt = state.data.reduce(
        (total, item) => total + item.total,
        0
      );
    },
    decrementData: (state, action) => {
      const index = action.payload;
      state.data[index].qty--;
      state.data[index].total = state.data[index].price * state.data[index].qty;
      state.finleAmt = state.data.reduce(
        (total, item) => total + item.total,
        0
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, incrementData, decrementData } = addCart.actions;

export default addCart.reducer;
