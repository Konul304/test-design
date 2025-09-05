import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users, MapPin, DollarSign, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const startupOpportunities = [
  {
    id: 1,
    name: 'AgriTech Innovations',
    country: 'Kazakhstan',
    flag: '🇰🇿',
    sector: 'Precision Agriculture',
    fundingGoal: '500K',
    raised: '320K',
    progress: 64,
    description: 'IoT-based crop monitoring and automated irrigation systems for wheat farms',
    stage: 'Series A',
    investors: 45,
    image: 'https://images.unsplash.com/photo-1590324778348-5f5abb63bb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN0YXJ0dXAlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc1Njk2Njg3Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Cotton Tech Solutions',
    country: 'Uzbekistan',
    flag: '🇺🇿',
    sector: 'Supply Chain',
    fundingGoal: '750K',
    raised: '450K',
    progress: 60,
    description: 'Blockchain-based cotton traceability and quality assurance platform',
    stage: 'Seed',
    investors: 32,
    image: 'https://images.unsplash.com/photo-1684607961356-1d99dc31aee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmaWVsZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzU2OTY2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'OrganicFruit Hub',
    country: 'Turkey',
    flag: '🇹🇷',
    sector: 'Food Tech',
    fundingGoal: '300K',
    raised: '280K',
    progress: 93,
    description: 'Direct-to-consumer organic fruit marketplace connecting farmers and buyers',
    stage: 'Pre-Series A',
    investors: 67,
    image: 'https://images.unsplash.com/photo-1630700499299-9ba22882142d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMG9yY2hhcmQlMjBmcnVpdHxlbnwxfHx8fDE3NTY5NjY4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const StartupSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-green-700 mb-4 flex items-center justify-center gap-2" style={{ fontSize: '24px' }}>
            <Rocket className="w-6 h-6" />
            Agricultural Startup Investment Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Invest in innovative agricultural startups across Turkic member states driving digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {startupOpportunities.map((startup) => (
            <Card key={startup.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
              {/* Startup Image */}
              <div className="relative h-48">
                <ImageWithFallback
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">
                    {startup.stage}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2">
                  <span className="text-2xl">{startup.flag}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {startup.sector}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {startup.investors}
                  </div>
                </div>
                <CardTitle className="text-xl">{startup.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 text-red-500" />
                  {startup.country}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700 line-clamp-3">
                  {startup.description}
                </p>

                {/* Funding Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Funding Progress</span>
                    <span className="font-medium">{startup.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${startup.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>${startup.raised} raised</span>
                    <span>${startup.fundingGoal} goal</span>
                  </div>
                </div>

                {/* Investment Button */}
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <DollarSign className="w-5 h-5 mr-2" />
                  💰 INVEST NOW
                </Button>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {startup.progress > 80 ? '🔥' : startup.progress > 50 ? '📈' : '🚀'}
                    </div>
                    <p className="text-xs text-gray-500">Status</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-gray-500">Growing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Invest in Agricultural Innovation?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our investment platform and support the next generation of agricultural technology startups across Turkic states
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300">
              Become an Investor
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};