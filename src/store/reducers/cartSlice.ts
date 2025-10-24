import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageURL: string;
  quantity: number;
  sum: number;
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // add item to cart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          sum: action.payload.price,
        });
      }
    },

    // remove item from cart
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem && existingItem.quantity != 1) {
        existingItem.quantity -= 1;
        existingItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },

    // remove product from cart
    // empty cart
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
