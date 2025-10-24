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
      const isItemExist = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (isItemExist) {
        isItemExist.quantity++;
        isItemExist.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          sum: action.payload.price,
        });
      }
    },
    // remove item from cart
    // remove product from cart
    // empty cart
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
