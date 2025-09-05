import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'KZ Agriculture Startup School',
    date: '22 August 2025',
    location: 'Almaty, Kazakhstan',
    description: 'Innovation program for agtech entrepreneurs across Turkic states',
    attendees: 150,
    type: 'Educational',
    flag: '🇰🇿',
    hasInvestButton: true
  },
  {
    id: 2,
    title: 'AZ Pomegranate Festival',
    date: '30 August 2025',
    location: 'Baku, Azerbaijan',
    description: 'Celebrating pomegranate harvest and export opportunities',
    attendees: 300,
    type: 'Festival',
    flag: '🇦🇿',
    hasInvestButton: false
  },
  {
    id: 3,
    title: 'UZ Regional Export Forum',
    date: '15 September 2025',
    location: 'Tashkent, Uzbekistan',
    description: 'Strategic discussions on agricultural trade expansion',
    attendees: 200,
    type: 'Forum',
    flag: '🇺🇿',
    hasInvestButton: false
  },
  {
    id: 4,
    title: 'TR Digital Agriculture Conference',
    date: '28 September 2025',
    location: 'Istanbul, Turkey',
    description: 'Latest trends in agricultural technology and data analytics',
    attendees: 400,
    type: 'Conference',
    flag: '🇹🇷',
    hasInvestButton: true
  },
  {
    id: 5,
    title: 'KG Organic Farming Workshop',
    date: '5 October 2025',
    location: 'Bishkek, Kyrgyzstan',
    description: 'Sustainable farming practices and certification processes',
    attendees: 80,
    type: 'Workshop',
    flag: '🇰🇬',
    hasInvestButton: false
  },
  {
    id: 6,
    title: 'TM Cotton Trade Summit',
    date: '12 October 2025',
    location: 'Ashgabat, Turkmenistan',
    description: 'Cotton industry developments and market opportunities',
    attendees: 250,
    type: 'Summit',
    flag: '🇹🇲',
    hasInvestButton: false
  }
];

export const EventsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-green-700 mb-4" style={{ fontSize: '24px' }}>Upcoming Events & Announcements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest agricultural events, conferences, and opportunities across Turkic Member States
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.slice(0, 6).map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    {event.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-xl">{event.flag}</span>
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    📅 {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    {event.location}
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3" style={{ height: '40px' }}>
                    {event.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-green-50 hover:border-green-300 transition-all duration-200">
                      Learn More
                    </Button>
                    {/* {event.hasInvestButton && (
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white hover:shadow-lg transition-all duration-200">
                        💰 Invest Now
                      </Button>
                    )} */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};