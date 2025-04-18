import axios from 'axios';

const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://task-list-dev-challenge-server.up.railway.app';
  } else {
    return 'http://127.0.0.1:8080';
  }
};


const baseURL = getUrl();

const api = axios.create({
  baseURL,
});

export default api;
