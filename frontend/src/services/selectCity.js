import axios from 'axios'

export default function(){

  const instance = axios.create({
    baseURL: 'https://geo.api.gouv.fr',
    timeout: 8000
  });

  return instance;

}
