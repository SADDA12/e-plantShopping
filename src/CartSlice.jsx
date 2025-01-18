import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name,image,cost} = action.payload;
        const existed = state.items.find(i => i.name === name);
        if (existed){
            existed.quantity++;
        } else {
            state.items.push({name,image,cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(i => i.name !== i.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const targetedItem = state.items.find(i => i.name === name);
        if (targetedItem) {
            targetedItem.quantity = quantity;
        }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
