import api from "./api";

class Exams {
  getByAuthor = async () => {
    return await api.get("/exam/getByAuthor");
  };
  addExam = async (data) => {
    return api.post("/exam/create", data);
  };
  delete = async (examId) => {
    return api.delete(`/exam/${examId}`);
  };
  getExamById = async (examId) => {
    return await api.get(`/exam/${examId}`);
  };
  update = async (examId, data) => {
    return await api.put(`/exam/${examId}`, data);
  };
}

export const examService = new Exams();
