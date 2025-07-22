import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaSignOutAlt, FaUserCog } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const Header = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side (empty for now but can be used for breadcrumbs or title) */}
        <div></div>
        
        {/* Right side with user dropdown */}
        <div className="flex items-center space-x-6">
          {/* Admin Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center space-x-2 focus:outline-none group"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-sm">
                <span className="text-lg">A</span>
              </div>
              <div className={`hidden md:flex md:items-center ${isArabic ? 'space-x-reverse' : ''} space-x-1`}>
                <span className="text-sm font-medium text-gray-700">
                  {isArabic ? 'مدير' : 'Admin'}
                </span>
                <FaChevronDown 
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} 
                />
              </div>
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className={`absolute ${isArabic ? 'left-0' : 'right-0'} mt-2 w-28 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none z-50 overflow-hidden`}>
                <div className="py-1">
                  <button
                    onClick={onLogout}
                    className={`w-full flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-800 ${isArabic ? 'flex-row-reverse' : ''}`}
                  >
                    <FaSignOutAlt className={`${isArabic ? 'ml-2' : 'mr-2'} text-red-400`} />
                    {isArabic ? 'تسجيل خروج' : 'Logout'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;