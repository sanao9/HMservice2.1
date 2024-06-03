import React, { useState } from 'react';
import axios from 'axios';

function AddVehicleForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vehicle = { make, model, vin };

    try {
      const response = await axios.post('/api/vehicles', vehicle, { withCredentials: true });

      if (response.status === 201) {
        setMake('');
        setModel('');
        setVin('');
        setSuccess('Vehicle added successfully!');
        setError('');
      } else {
        setError('Failed to add vehicle. Please try again.');
      }
    } catch (error) {
      console.error('Error adding vehicle:', error);
      setError('An error occurred while adding the vehicle. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-transparent shadow-lg rounded-lg">
      <h2 className="text-2xl text-white font-bold mb-4 text-center">Add Vehicle</h2>
      {success && <p className="mb-4 text-green-500">{success}</p>}
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block text-white mb-2">
          Make:
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </label>
        <label className="block text-white mb-2">
          Model:
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </label>
        <label className="block text-white mb-2">
          VIN:
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default AddVehicleForm;
