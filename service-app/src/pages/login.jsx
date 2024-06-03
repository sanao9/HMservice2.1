import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        toast.error('Email and password are required.');
        return;
      }

      const response = await axios.post('api/auth/login', { email, password });
      const { data } = response;

      if (response.status === 200) {
        toast.success(data.message);

        // Store token in cookies
        Cookies.set('accessToken', data.token, { expires: 1 }); // Expires in 1 day

        // Role-based navigation
        if (data.data.role === 'customer') {
          console.log('Navigating to user dashboard...');
          navigate('/UserDashboard');
        } else if (data.data.role === 'admin') {
          console.log('Navigating to admin dashboard...');
          navigate('/adminDashboard');
        }

        dispatch({ type: 'LOGIN_SUCCESS', payload: data.data.user });
        setEmail('');
        setPassword('');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
