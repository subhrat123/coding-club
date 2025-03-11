
import api from "./axiosConfig";

// **1. Register User**
export const registerUser = async (userData) => {
    console.log(userData);
  const response = await api.post("auth/register", userData);
  return response;
};

// **2. Login User**
export const loginUser = async (credentials) => {
  const response = await api.post("auth/login", credentials);
  return response;
};

// **3. Logout User**
export const logoutUser = async () => {
  const response = await api.post("auth/logout");
  return response.data;
};

// **4. Get User Profile by ID**
export const getUserProfile = async (userId) => {
  const response = await api.get(`auth/profile/${userId}`);
  return response.data;
};

// **5. Update User Profile**
export const updateUserProfile = async (userId, updateData) => {
  const response = await api.put(`auth/profile/${userId}`, updateData);
  return response.data;
};
