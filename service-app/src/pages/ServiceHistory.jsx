import React, { useEffect, useState } from 'react';
import { fetchServiceHistory } from '../api/serviceHistoryApi';

const ServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([]);

  useEffect(() => {
    const getServiceHistory = async () => {
      try {
        const data = await fetchServiceHistory();
        setServiceHistory(data);
      } catch (error) {
        console.error('Error fetching service history:', error);
      }
    };

    getServiceHistory();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Service History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Vehicle</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Service Date</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {serviceHistory.map(record => (
              <tr key={record._id}>
                <td className="py-2 px-4 border-b">{record.vehicle.make} {record.vehicle.model}</td>
                <td className="py-2 px-4 border-b">{record.user.name} ({record.user.email})</td>
                <td className="py-2 px-4 border-b">{new Date(record.serviceDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{record.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceHistory;
