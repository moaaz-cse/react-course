import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //original state = {items:["pizza"]}
    clearCart: (state) => {
      // console.log(state); //redux will give some object that it comapere with new object using immerse
      // console.log(current(state)); //this will give the actual state object
      // state = []; //this will not mutate the original state object,instead it will mutate the local state object.

      state.items.length = 0; //{items:[]}

      //we can also directly return the new/updated state like this return {items:[]};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
