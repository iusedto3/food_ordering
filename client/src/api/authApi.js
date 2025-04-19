import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const authApi = axios.create({
    baseURL: `${API_URL}/api/auth`,
    withCredentials: true
});

export const login = (userData) => authApi.post('/login', userData);
export const register = (userData) => authApi.post('/register', userData);
export const logout = () => authApi.post('/logout');
export const forgotPassword = (email) => authApi.post('/forgotpassword', email);
export const resetPassword = (resetData) => authApi.put('/resetpassword', resetData);

export default {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword
};