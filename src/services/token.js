import api from "./api";

class TokenService {
  validate = async (token) => {
    return await api.get("/token/check", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export const tokenService = new TokenService();
