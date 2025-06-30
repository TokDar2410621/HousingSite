import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: false,  // True si tu utilises l’authentification par cookie
});
