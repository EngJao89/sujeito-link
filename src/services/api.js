import axios from 'axios';

export const key = "6f9d7e56b9ed488a59eaf923e5d7f7c37cb2b6cb";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`
  }
})

export default api;