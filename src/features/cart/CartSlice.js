import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //   state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => (item.id = action.payload)
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => (item.id = action.payload)
      );
      cartItem.amount = cartItem.amount - 1;
    },
    caluculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const response = await asyncCount(payload);
    dispatch(clearCart(response.data));
  };
};

export const { clearCart, removeItem, increase, decrease, caluculateTotals } =
  cartSlice.actions;

export { addAsync };

export default cartSlice.reducer;
