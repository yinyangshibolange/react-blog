import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    // withCredentials: true, //关键
    // headers: {'content-type': 'application/json'},
  });
