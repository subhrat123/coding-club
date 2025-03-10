import api from "./axiosConfig";


export const getUser = async () => {
    const response = await api.get("user/profile");
    return response;
};