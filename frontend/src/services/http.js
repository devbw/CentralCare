import axios from 'axios'

export default function(){

  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 8000
  });

  instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return instance;

}
