import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const memberCountries = [
  { name: 'Azerbaijan', flag: '🇦🇿' },
  { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Kyrgyzstan', flag: '🇰🇬' },
  { name: 'Turkey', flag: '🇹🇷' },
  // { name: 'Turkmenistan', flag: '🇹🇲' },
  { name: 'Uzbekistan', flag: '🇺🇿' },
  // { name: 'Hungary', flag: '🇭🇺' }
];

const quickLinks = [
  'About DAD Platform',
  'Membership',
  'Trade Opportunities',
  'Market Reports',
  'Agricultural Data',
  'Event Calendar'
];

const resources = [
  'Documentation',
  'API Reference',
  'Help Center',
  'Contact Support',
  'Privacy Policy',
  'Terms of Service'
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <h3 className="text-2xl font-bold text-green-400">DAD</h3>
                <p className="text-sm text-gray-300">Digital Agro Data Platform</p>
              </div>
              {/* OTS Logo placeholder */}
              <div className="bg-blue-600 px-3 py-1 rounded text-sm font-medium">
                OTS
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              The central agricultural data platform connecting Turkic States through innovative
              digital solutions for sustainable agricultural development and trade facilitation.
            </p>

            {/* Member Countries */}
            <div className="mb-6">
              <h4 className="text-green-400 mb-3">Member States</h4>
              <div className="flex flex-wrap gap-3">
                {memberCountries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@dad-platform.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+94 125 213 494</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-green-400 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 text-sm transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2025 Organization of Turkic States - Digital Agro Data Platform</p>
              <p className="mt-1">All rights reserved. Built for sustainable agricultural development.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};