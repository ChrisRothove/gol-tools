import { serviceConfig } from "../serviceConfig";

const PATHS = {
  USERS: "/users",
};

export async function getUserList() {
  const res = await serviceConfig.get(PATHS.USERS);
  return res.data;
}

export async function updateUserAttribute(id, updateObj) {
  const res = await serviceConfig.put(`${PATHS.USERS}/${id}`, updateObj);
  return res.data;
}
