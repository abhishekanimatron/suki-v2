import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// our store, which has basketReducer as reducer
// A friendly abstraction over the standard Redux createStore() function.
export const store = configureStore({
  // A single reducer function that will be used as the root reducer
  reducer: {
    basket: basketReducer,
  },
});
