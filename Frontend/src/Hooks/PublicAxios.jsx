import axios from "axios";

// Create an Axios instance with default configuration
const publicAxios = axios.create({
    baseURL: "http://localhost:5174",
    withCredentials: true,
});

// Export the Axios instance directly
export default publicAxios;

// https://heritage-back-end.vercel.app
// http://localhost:3000
