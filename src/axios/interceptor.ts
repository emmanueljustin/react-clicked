import axios from "axios";

const fetchApi = axios.create({
  baseURL: 'http://192.168.0.150:8080/api/v1',
});

fetchApi.interceptors.request.use((request) => {
  request.headers['Accept'] = 'application/json';
  request.headers['Content-Type'] = 'application/json'
  console.log('::: <> Request Sent');
  return request;
})

export default fetchApi
