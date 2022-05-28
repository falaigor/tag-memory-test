import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VITE_API_URL,
});
