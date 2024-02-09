// src/features/listingsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    listings: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchListingsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchListingsSuccess(state, action) {
      state.loading = false;
      state.listings = action.payload;
    },
    fetchListingsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchListingByIdStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchListingByIdSuccess(state, action) {
      state.loading = false;
      state.listing = action.payload;
    },
    fetchListingByIdFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchListingsStart,
  fetchListingsSuccess,
  fetchListingsFailure,
  fetchListingByIdStart,
  fetchListingByIdSuccess,
  fetchListingByIdFailure,
} = listingsSlice.actions;

export default listingsSlice.reducer;
