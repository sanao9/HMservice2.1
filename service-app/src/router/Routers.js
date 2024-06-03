// components/Routers.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from '../pages/home';
import AboutUs from '../pages/aboutUs';
import Features from '../pages/features';
import Login from "../pages/login";
import Signup from "../pages/signUp";
import Packages from "../pages/packeges";
import AddVehicleForm from "../pages/addVehicleForm";
import AddAppointmentForm from '../pages/AddAppointmentForm';
import AppointmentList from '../pages/AppointmentList';
import ProductList from "../pages/ProductList";
import AdminDashboard from "../pages/adminDashboard";
import UserDashboard from "../pages/UserDashboard";
import Payment from "../pages/Payment";
import WheelBrandPage from "../pages/WheelBrand";
import SuspeBrandPage from "../pages/SuspeBrand";
import VehicleTable from "../pages/VehicleTable";
import AdminPackageManager from "../pages/AdminPackageManager";
import ParentComponent from "../pages/appinment";





const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/packages" element={<Packages />} /> 
          <Route path="/addVehicleForm" element={<AddVehicleForm />} />
          <Route path="/AddAppointmentForm" element={<AddAppointmentForm />} />
          <Route path="/AppointmentList" element={<AppointmentList />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/Payments" element={< payment/>} />
          <Route path="/WheelBrand" element={<WheelBrandPage />} />
          <Route path="/SuspeBrand" element={<SuspeBrandPage />} />
          <Route path="/VehicleTable" element={<VehicleTable/>} />
          <Route path="/packeges" element={<Packages />} />
          <Route path="/AdminPackageManager" element={<AdminPackageManager/>} />
          <Route path="/appinment" element={<ParentComponent/>} />
          
          {/* Protected Routes 
          <Route path="/UserDashboard" element={<ProtectedRoute allowedRoles={['user', 'admin']}><UserDashboard /></ProtectedRoute>} />
          <Route path="/adminDashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />*/}
        </Route>
      </Routes>
  );
}

export default Routers;
