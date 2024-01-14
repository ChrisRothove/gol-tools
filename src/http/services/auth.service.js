import { serviceConfig } from "../serviceConfig";

export const login = async (body) => {
  const res = await serviceConfig.post("/users/login", body);
  return res.data;
};

export const register = async (body) => {
  const res = await serviceConfig.post("/users/register", body);
  return res.data;
};
