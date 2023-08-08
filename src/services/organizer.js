import api from "./api";

class AuthOrganizer {
  login = async (data) => {
    return await api.post("/organizer/login", data);
  };
  updateInfo = async (data) => {
    return await api.put(`/organizer/update-info`, data);
  };
  getMe = async () => {
    return await api.get("/organizer/getme");
  };
}

export const authOrgService = new AuthOrganizer();
