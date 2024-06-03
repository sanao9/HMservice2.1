import React, { useState, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from "../assets/logo.jpg";
import { AuthContext } from '../../context/AuthContext'; // Adjust the import path if necessary
import AdminSideBar from '../SideBar/AdminSideBar';
import CustomerSideBar from '../SideBar/CustomerSideBar';

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About Us", path: "/aboutUs" },
        { link: "Features", path: "/features" },
        { link: "Packages", path: "/packages" },
    ];

    const handleClick = (path) => {
        window.location.href = path;
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        window.location.href = '/';
    };

    return (
        <>
            <div className="bg-gray py-2 text-white">
                <p>Welcome to HM Vehicle - Your Trusted Destination for Vehicle Services</p>
            </div>

            <header className='sticky top-0 z-50 py- text-white bg-transparent border-b border-neutral-500/80'>
                <div className='container mx-auto sticky text-sm'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center flex-shrink-0'>
                        {user && user.role === 'admin' && <AdminSideBar />}
                        {user && user.role === 'customer' && <CustomerSideBar />}
                            <img className="h-8 w-8 mr-2 cursor-pointer" src={Logo} alt='logo' onClick={handleLogoClick} />
                            <span className="text-white">HM Vehicle</span>
                        </div>
                       
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-white focus:outline-none'>
                                <FaBars />
                            </button>
                        </div>
                        <ul className="md:flex space-x-8 hidden">
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <a href={path} className="hover:text-gray-300">{link}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden md:flex items-center space-x-8">
                            {user ? (
                                <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300" onClick={handleLogout}>Logout</button>
                            ) : (
                                <>
                                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all duration-300" onClick={() => handleClick('/signUp')}>Sign up</button>
                                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all duration-300" onClick={() => handleClick('/login')}>Login</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`px-4 py-2 bg-gray-100 ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="space-y-2">
                        {navItems.map(({ link, path }) => (
                            <li key={link}>
                                <a href={path} className="block text-white hover:text-gray-300" onClick={toggleMenu}>{link}</a>
                            </li>
                        ))}
                        {!user ? (
                            <div className='flex space-x-6'>
                                <a href='/login' className='py-2 px-3 border rounded-md' onClick={toggleMenu}>
                                    Sign in
                                </a>
                                <a href='/signUp' className='bg-red-600 text-white py-2 px-3 border rounded-md' onClick={toggleMenu}>
                                    Create Account
                                </a>
                            </div>
                        ) : (
                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300" onClick={handleLogout}>Logout</button>
                        )}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
