import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">DEMS SERVICE</h2>
            <p className="mt-2 text-sm">Providing quality IT services since 2023</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 dark:hover:text-blue-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2024 DEMS SERVICE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;