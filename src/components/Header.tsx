import React from 'react';
import { Button } from './ui/button';
import { ChevronDown, Globe, User, LogIn } from 'lucide-react';

export const Header = () => {
  const menuItems = [
    'About Us',
    'OTS-Made',
    'Export Requests',
    'Events',
    'Country Stats',
    'Meteorology',
    'Contacts'
  ];

  const languages = ['EN', 'RU', 'TR', 'AZ', 'UZ', 'KZ'];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo with Turkish State Flags */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              {/* Flag Logo */}
              {/* <div className="flex items-center bg-gradient-to-r from-green-600 to-white p-2 rounded-lg shadow-sm">
                <div className="flex space-x-1">
                  <span className="text-sm">🇹🇷</span>
                  <span className="text-sm">🇦🇿</span>
                  <span className="text-sm">🇰🇿</span>
                  <span className="text-sm">🇺🇿</span>
                </div>
              </div> */}
              <div style={{ marginRight: '50px' }}>
                <h1 className="text-2xl font-bold text-green-600">DAD</h1>
                <p className="text-xs text-gray-500 -mt-1">Digital Agro Data</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side - Language selector and auth buttons */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 hover:bg-green-50 text-sm px-3 py-2 rounded-md transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span className="font-medium">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white hover:shadow-lg transition-all duration-200 font-medium">
                <User className="w-4 h-4 mr-2" />
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};