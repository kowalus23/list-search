import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a7f357a8a36d254a8d86501b2630118a19386b32d9fee6d8306b6940e72228e2'
  }
});