import axios from "axios";

const Axios = axios.create({
  baseURL: `https://homemate-backend-ghro.onrender.com/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
