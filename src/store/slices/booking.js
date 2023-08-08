import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  errors: null,
  bookings: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    onStart: (state) => {
      state.isLoading = true;
    },
    success: (state, payload) => {
      state.isLoading = false;
      state.bookings = payload;
      state.errors = null;
    },
    failure: (state, payload) => {
      state.isLoading = false;
      state.errors = payload;
      state.bookings = null;
    },
  },
});

export const { onStart, success, failure } = bookingSlice.actions;
export default bookingSlice.reducer;
