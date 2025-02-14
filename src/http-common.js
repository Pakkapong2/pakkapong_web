import axios from "axios";

export default axios.create({
  baseURL: "https://pakkapong-api-1.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});