import { configureStore } from "@reduxjs/toolkit";

// slices
import loginSlice from "./slices/login";
import examSlice from "./slices/exam";
import getExamIdSlice from "./slices/updateExam";
import bookingSlice from "./slices/booking";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    exam: examSlice,
    examId: getExamIdSlice,
    booking: bookingSlice,
  },
});
