import axios from 'axios';

const API_URL = 'http://localhost:5000/api/serviceHistory';

export const fetchServiceHistory = async () => {
  const response = await axios.get('/api/serviceHistory', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const addServiceHistory = async (serviceHistory) => {
  const response = await axios.post(API_URL, serviceHistory, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};
