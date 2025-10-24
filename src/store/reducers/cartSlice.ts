import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageURL: string;
  quantity: number;
}

const initialState = {
  items: [] as CartItem[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // add item to cart
    // remove item from cart
    // remove product from cart
    // empty cart
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
