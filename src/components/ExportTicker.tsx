import React from 'react';
import { Button } from './ui/button';
import { Clock, FileText } from 'lucide-react';

const exportRequests = [
  {
    id: 1,
    country: 'Uzbekistan',
    flag: '🇺🇿',
    product: 'Cottonseed Oil',
    quantity: '300 tons',
    deadline: '2025-09-15'
  },
  {
    id: 2,
    country: 'Kazakhstan',
    flag: '🇰🇿',
    product: 'Apples',
    quantity: '100 tons',
    deadline: '2025-09-20'
  },
  {
    id: 3,
    country: 'Azerbaijan',
    flag: '🇦🇿',
    product: 'Hazelnuts',
    quantity: '200 tons',
    deadline: '2025-09-25'
  },
  {
    id: 4,
    country: 'Turkiye',
    flag: '🇹🇷',
    product: 'Dried Fruits',
    quantity: '150 tons',
    deadline: '2025-09-18'
  },
  {
    id: 5,
    country: 'Kyrgyzstan',
    flag: '🇰🇬',
    product: 'Organic Honey',
    quantity: '50 tons',
    deadline: '2025-09-22'
  },
  {
    id: 6,
    country: 'Turkmenistan',
    flag: '🇹🇲',
    product: 'Cotton',
    quantity: '500 tons',
    deadline: '2025-09-30'
  }
];

export const ExportTicker = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 py-6 my-8 rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center mb-4 text-green-700" style={{ fontSize: '24px' }}>Real-time Export Requests</h3>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...exportRequests, ...exportRequests].map((request, index) => (
              <div
                key={`${request.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-sm p-4 min-w-80 border border-gray-100 hover:shadow-lg hover:border-green-300 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-2 rounded-full">
                      <span className="text-2xl">{request.flag}</span>
                    </div>
                    <span className="font-medium text-gray-800">{request.country}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    <Clock className="w-4 h-4 mr-1 text-red-500" />
                    {request.deadline}
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="text-green-700 font-semibold mb-1">{request.product}</h4>
                  <p className="text-gray-600 font-medium">{request.quantity}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs px-3 py-1 hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                    Deadline
                  </Button>
                  <Button size="sm" className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md transition-all duration-200">
                    <FileText className="w-3 h-3 mr-1" />
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};