import axios from "axios";

export const serviceConfig = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE",
  },
});
