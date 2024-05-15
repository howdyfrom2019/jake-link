import axios from 'axios';

const jakeLinkService = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev'
      ? 'http://localhost:3000'
      : '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default jakeLinkService;
