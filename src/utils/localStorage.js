class LocalStorage {
  setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  getItem = () => {
    return localStorage.getItem("accessToken");
  };
  removeItem = () => {
    localStorage.removeItem("token");
  };
}

export const lsClient = new LocalStorage();
