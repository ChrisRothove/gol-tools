import axios from "axios";

export const serviceConfig = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE",
  },
});
