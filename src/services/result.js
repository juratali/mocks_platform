import api from "./api";

class Results {
  allAreTrue = async (examId) => {
    return await api.get(`/result/areFilled/${examId}`);
  };
  send = async (examId) => {
    return await api.post(`/result/send/${examId}`);
  };
  checkStatus = async (examId) => {
    return await api.get(`/result/check/${examId}`);
  };
}

export const resultService = new Results();
