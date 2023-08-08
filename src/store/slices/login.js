import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  errors: null,
  organizer: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    onStart: (state) => {
      state.isLoading = true;
    },
    success: (state, payload) => {
      state.errors = null;
      state.organizer = payload;
      state.errors = null;
    },
    failure: (state, payload) => {
      state.isLoading = false;
      state.errors = payload;
      state.organizer = null;
    },
  },
});

export const { onStart, success, failure } = loginSlice.actions;
export default loginSlice.reducer;
