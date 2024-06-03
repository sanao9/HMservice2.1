import axios from 'axios';

const API_URL = 'http://localhost:5000/api/vehicles/admin';

export const fetchAllDataForAdmin = async () => {
  try {
    const vehiclesResponse = await axios.get(`${API_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const usersResponse = await axios.get(`${API_URL}/auth/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return {
      vehicles: vehiclesResponse.data,
      users: usersResponse.data,
    };
  } catch (error) {
    throw new Error(`Error fetching data for admin: ${error.message}`);
  }
};
