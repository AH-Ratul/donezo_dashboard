import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor — attach token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor — handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Auth
export const loginUser = (email, password) =>
  api.post("/api/login", { email, password });

// Dashboard data
export const getDashboardData = () => api.get("/api/dashboard");
export const getOverview = () => api.get("/api/overview");
export const getUsers = () => api.get("/api/users");
export const getUser = (id) => api.get(`/api/users/${id}`);
export const getAnalytics = () => api.get("/api/analytics");
export const getProducts = () => api.get("/api/products");
export const getProduct = (id) => api.get(`/api/products/${id}`);

export default api;
