import axios from "axios";

export const serviceConfig = axios.create({
  baseURL: process.env.SERVER_URL,
});
