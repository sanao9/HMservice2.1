// Packages.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPackage, fetchPackages } from '../api/packageApi';
import './Packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ name: '', image: null, price: '', description: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="p-8 h-100 bg-transparent">

      <h2 className="text-3xl text-white font-bold mb-6">Our Service Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map(pkg => (
          <Link key={pkg._id} to={`/package/${pkg._id}`} className="block p-4 border rounded shadow-lg hover:shadow-2xl transition-shadow duration-200 transform hover:-translate-y-2 package-card">
            <img src={`http://localhost:5000/${pkg.image}`} alt={pkg.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl text-white font-semibold mb-2">{pkg.name}</h3>
            <p className="text-white mb-2">{pkg.price}</p>
            <p className="text-white">{pkg.description}</p>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Packages;
