import axios from 'axios';

const serverApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

export default serverApiClient;
