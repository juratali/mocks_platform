import { useMutation, useQuery } from "react-query";
import { bookingService } from "../../../services";
import { queryClient } from "../../../app/main";

const useBookings = (examId, bookingId) => {
  const addUser = useMutation((data) => bookingService.addCandidate(data));

  const fetchBookingsByExam = useQuery(
    ["bookings", examId],
    () => {
      return bookingService.getByExamId(examId);
    },
    {
      retry: 0,
      onSuccess: () => {
        queryClient.invalidateQueries(["result", "areFilled"]);
      },
    }
  );

  const updateById = useMutation(
    (data) => bookingService.update(bookingId, data),
    {
      retry: 0,
    }
  );

  const deleteById = useMutation(
    (bookingId) => bookingService.delete(bookingId),
    {
      retry: 0,
    }
  );

  return {
    addUser,
    fetchBookingsByExam,
    updateById,
    deleteById,
  };
};

export default useBookings;
