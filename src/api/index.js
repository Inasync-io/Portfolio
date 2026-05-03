import axios from "axios";
const baseURL =
  process.env.REACT_APP_ENV === "dev"
    ? process.env.REACT_APP_LOCAL_BE
    : process.env.REACT_APP_CLOUD_BE;
    
export const APICall = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
