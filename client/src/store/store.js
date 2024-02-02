import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./reducers/listingsSlice";

export default configureStore({
  reducer: {
    listings: listingsReducer,
  },
});
