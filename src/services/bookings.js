import api from "./api";

class Bookings {
  getByExamId = async (examId) => {
    return await api.get(`/booking/${examId}`);
  };
  addCandidate = async (data) => {
    return await api.post("/booking/create", data);
  };
  finByBookingId = async (bookingId) => {
    return await api.get(`/booking/one/${bookingId}`);
  };
  update = async (bookingId, data) => {
    return await api.put(`/booking/${bookingId}`, data);
  };
  delete = async (bookingId) => {
    return await api.delete(`/booking/${bookingId}`);
  };
}

export const bookingService = new Bookings();
