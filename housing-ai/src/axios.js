import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false, // True si tu utilises l’authentification par cookie
});
