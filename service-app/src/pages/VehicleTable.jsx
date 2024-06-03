import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminVehicleTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/vehicles/admin');
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching data for admin:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">All Data</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4">Make</th>
            <th className="py-3 px-4">Model</th>
            <th className="py-3 px-4">VIN</th>
            <th className="py-3 px-4">Owner Name</th>
            <th className="py-3 px-4">Owner Email</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle._id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{vehicle.make}</td>
              <td className="py-3 px-4">{vehicle.model}</td>
              <td className="py-3 px-4">{vehicle.vin}</td>
              <td className="py-3 px-4">{vehicle.owner.name}</td>
              <td className="py-3 px-4">{vehicle.owner.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminVehicleTable;
 