// components/AppointmentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointment/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('An error occurred while fetching appointments.');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Scheduled Appointments</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Vehicle ID: {appointment.vehicleId}</p>
            <p>Owner: {appointment.owner}</p>
            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
            <p>Service Package: {appointment.servicePackage.name} - ${appointment.servicePackage.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
