import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct?",
});

export default instance;
