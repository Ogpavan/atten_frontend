// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://attendance-api-plum.vercel.app', // Your backend URL
});

export default instance;
