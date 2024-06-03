// AddAppointmentForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAppointmentForm = () => {
  const [packages, setPackages] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    servicePackage: '',
    vehicleId: '',
  });

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/packages');
        setPackages(res.data || []); // Ensure packages is an array
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    const fetchVehicles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/vehicles', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setVehicles(res.data || []); // Ensure vehicles is an array
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchPackages();
    fetchVehicles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointment', formData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Appointment created successfully');
      setFormData({
        date: '',
        time: '',
        servicePackage: '',
        vehicleId: '',
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 h-screen flex flex-col items-center">
      <h2 className="text-2xl text-navy-500 font-bold mb-6">Create Appointment</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Package</label>
          <select
            name="servicePackage"
            value={formData.servicePackage}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a package</option>
            {packages.map(pkg => (
              <option key={pkg._id} value={pkg._id}>{pkg.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle VIN</label>
          <select
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a vehicle</option>
            {vehicles.map(vehicle => (
              <option key={vehicle._id} value={vehicle._id}>{vehicle.vin}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-navy-500 text-white py-2 px-4 rounded hover:bg-navy-700"
        >
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default AddAppointmentForm;
