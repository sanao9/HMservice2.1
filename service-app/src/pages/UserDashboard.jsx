import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const { user, token } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log('Logged in user:', user);
  console.log('Token:', token);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <strong className="font-medium">Name:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong className="font-medium">Email:</strong> {user.email}
        </div>
        
      </div>
    </div>
  );
};

export default UserDashboard;

