import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">EdTech Platform</span>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/fiches-metiers" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Fiches métiers
            </Link>
            <Link to="/revision-bac" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Révision Bac
            </Link>
            <Link to="/quiz" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Quiz
            </Link>
            <Link to="/orientation" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Orientation
            </Link>
          </div>

          {/* Bouton hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/fiches-metiers"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Fiches métiers
          </Link>
          <Link
            to="/revision-bac"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Révision Bac
          </Link>
          <Link
            to="/quiz"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Quiz
          </Link>
          <Link
            to="/orientation"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Orientation
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;