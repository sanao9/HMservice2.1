// components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/components/assets/logo.jpg" alt="HM Vehicle" className="h-10 mr-3" />
              <span className="text-2xl font-semibold">HM Vehicle</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
              <ul>
                <li className="mb-4">
                  <a href="tel:0772344658" className="hover:underline">077-234-4658</a>
                </li>
                <li>
                  <a href="tel:0718022975" className="hover:underline">071-802-2975</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://facebook.com" className="hover:text-gray-400">
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="hover:text-gray-400">
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="hover:text-gray-400">
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-gray-400">
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 HM Vehicle. All rights reserved.</p>
          <div className="flex mt-4 sm:mt-0">
            <a href="/terms" className="text-sm hover:underline mx-2">Terms of Service</a>
            <a href="/privacy" className="text-sm hover:underline mx-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
