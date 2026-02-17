import axios from "axios";

const API = axios.create({ baseURL: "https://social-media-backend-r8fg.onrender.com" });

export const logIn = async (formData) =>await API.post('/auth/login',formData);

export const signUp = async (formData) =>await API.post('/auth/register',formData);
