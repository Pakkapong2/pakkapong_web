import axios from "axios";

export default axios.create({
  baseURL: "https://pakkapong-api.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});