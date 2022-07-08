import axios from "axios";

const BASE_URL = 'http://localhost:2100/api/';
//get access token from local storage
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

console.log(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken);


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });