import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://jdmwebsite.herokuapp.com/api/"
});