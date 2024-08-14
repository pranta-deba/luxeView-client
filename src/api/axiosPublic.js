import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosPublic;
