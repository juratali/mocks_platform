import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingExams: false,
  errors: null,
  exams: null,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    onStart: (state) => {
      state.isLoadingExams = true;
    },
    success: (state, payload) => {
      state.isLoadingExams = false;
      state.exams = payload;
      state.errors = null;
    },
    failure: (state, payload) => {
      state.isLoadingExams = false;
      state.errors = payload;
      state.exams = null;
    },
  },
});

export const { onStart, success, failure } = examSlice.actions;
export default examSlice.reducer;
