import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAppointmentForm from './AddAppointmentForm';

const ParentComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/user'); // Replace with your actual API endpoint
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user && <AddAppointmentForm user={user} />}
    </div>
  );
};

export default ParentComponent;
