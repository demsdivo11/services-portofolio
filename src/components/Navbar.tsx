import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              DEMS SERVICE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="btn btn-secondary">Home</Link>
              <Link to="/contact" className="btn btn-secondary">Contact</Link>
              <Link to="/terms" className="btn btn-secondary">S&K</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="btn btn-secondary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="btn btn-secondary block">Home</Link>
            <Link to="/contact" className="btn btn-secondary block">Contact</Link>
            <Link to="/terms" className="btn btn-secondary block">S&K</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;