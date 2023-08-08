import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  errors: null,
  examId: null,
};

export const getExamIdSlice = createSlice({
  name: "updateExam",
  initialState,
  reducers: {
    getExamId: (state, payload) => {
      state.examId = payload;
    },
  },
});

export const { getExamId } = getExamIdSlice.actions;
export default getExamIdSlice.reducer;
