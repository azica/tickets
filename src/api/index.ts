import axios, { AxiosInstance } from "axios";

export const baseApiUrl = process.env.REACT_APP_API_URL;

export const $api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: baseApiUrl,
    headers: { "Content-Type": "application/json" },
});