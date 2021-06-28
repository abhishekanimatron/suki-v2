import { createSlice } from "@reduxjs/toolkit";

// intially no items
const initialState = {
  items: [],
};

// slice created with "basket" name, and intialized to initial state
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // reducers
  reducers: {
    // item addition
    //previous items, + this item
    addToBasket: (state, action) => {
      // retrieve previous items and add/append action.payload to the list
      state.items = [...state.items, action.payload];
    },
    // item removal
    //removes that item from basket
    removeFromBasket: (state, action) => {
      // index of the item to find based on its id
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      // new basket contains all the state items
      let newBasket = [...state.items];
      //if item's index is found
      if (index >= 0) {
        // splicing removes that id, //Removes elements from an array
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove id:${action.payload.id} as not in basket`);
      }
      // assign our items list to the modified basket
      state.items = newBasket;
    },
  },
});

//export our reducers from actions of slice
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// this gets our items list
export const selectItems = (state) => state.basket.items;
// this gets our total price for all items in the list
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + parseInt(item.price), 0);

// The slice's reducer.
export default basketSlice.reducer;
