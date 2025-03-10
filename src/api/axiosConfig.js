import axios from "axios";

// Define the base URL for API requests (update as needed)
const API_BASE_URL = "https://ccbackend-leuz.onrender.com/api/";

// Axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Ensures cookies (like JWT) are included in requests if needed
  headers: {
    "Content-Type": "application/json",    
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;