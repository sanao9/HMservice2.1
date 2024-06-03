import React, { useState, useEffect } from 'react';
import { fetchPackages, createPackage, updatePackage, deletePackage } from '../api/packageApi';

const AdminPackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ name: '', image: null, price: '', description: '' });
  const [editingPackage, setEditingPackage] = useState(null);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    getPackages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewPackage({ ...newPackage, image: e.target.files[0] });
  };

  const handleCreatePackage = async () => {
    try {
      const formData = new FormData();
      formData.append('name', newPackage.name);
      formData.append('price', newPackage.price);
      formData.append('description', newPackage.description);
      formData.append('image', newPackage.image);

      const createdPackage = await createPackage(formData);
      setPackages([...packages, createdPackage]);
      setNewPackage({ name: '', image: null, price: '', description: '' });
    } catch (error) {
      console.error('Error creating package:', error);
    }
  };

  const handleUpdatePackage = async () => {
    try {
      const formData = new FormData();
      formData.append('name', newPackage.name);
      formData.append('price', newPackage.price);
      formData.append('description', newPackage.description);
      if (newPackage.image) {
        formData.append('image', newPackage.image);
      }

      const updatedPackage = await updatePackage(editingPackage._id, formData);
      setPackages(packages.map(pkg => (pkg._id === updatedPackage._id ? updatedPackage : pkg)));
      setEditingPackage(null);
      setNewPackage({ name: '', image: null, price: '', description: '' });
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDeletePackage = async (id) => {
    try {
      await deletePackage(id);
      setPackages(packages.filter(pkg => pkg._id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const startEditing = (pkg) => {
    setEditingPackage(pkg);
    setNewPackage(pkg);
  };

  return (
    <div className="p-8 h-70 bg-transparent">
      <h2 className="text-2xl text-white font-bold mb-6">Manage Packages</h2>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPackage.name}
          onChange={handleInputChange}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-2 p-2 border text-white border-gray-300 rounded w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newPackage.price}
          onChange={handleInputChange}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newPackage.description}
          onChange={handleInputChange}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        {editingPackage ? (
          <button
            onClick={handleUpdatePackage}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Update Package
          </button>
        ) : (
          <button
            onClick={handleCreatePackage}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Create Package
          </button>
        )}
      </div>
      <ul className="space-y-4">
        {packages.map(pkg => (
          <li key={pkg._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="mb-2">{pkg.description}</p>
            <button
              onClick={() => startEditing(pkg)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 mr-2"
            >
              Edit
            </button>
            <button onClick={() => handleDeletePackage(pkg._id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPackageManager;
