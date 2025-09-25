import api from "./api";

export const registerUser = (username, email, password) => {
  return api.post("/auth/register", { username, email, password });
};

export const loginUser = (email, password) => {
  return api.post("/auth/login", { email, password });
};