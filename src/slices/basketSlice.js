import { createSlice } from "@reduxjs/toolkit";

// intially no items
const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //previous items, + this item
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    //removes that item from basket
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      //if item is found
      if (index >= 0) {
        // splicing removes that id
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove id:${action.payload.id} as not in basket`);
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + parseInt(item.price), 0);

export default basketSlice.reducer;
