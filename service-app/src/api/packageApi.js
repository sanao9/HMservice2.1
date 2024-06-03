// api/packageApi.js
import axios from 'axios';

export const fetchPackages = async () => {
  const response = await axios.get('http://localhost:5000/api/packages');
  return response.data;
};

export const createPackage = async (formData) => {
  const response = await axios.post('http://localhost:5000/api/packages', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const updatePackage = async (id, formData) => {
  const response = await axios.put(`http://localhost:5000/api/packages/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/packages/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};
