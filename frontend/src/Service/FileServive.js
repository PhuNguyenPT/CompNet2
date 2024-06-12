import axios from "axios";

export const file = () => axios.get(`http://localhost:8080/files/search/${fileName}`)