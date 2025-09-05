import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Cloud, CloudRain, Sun, Thermometer, Droplets, AlertTriangle } from 'lucide-react';

const climateData = [
  {
    country: 'Uzbekistan',
    flag: '🇺🇿',
    temperature: '28°C',
    rainfall: 'High',
    condition: 'Rainy',
    impact: 'cotton harvest may delay',
    alert: 'High rainfall expected in Samarkand',
    severity: 'warning',
    icon: CloudRain
  },
  {
    country: 'Kazakhstan',
    flag: '🇰🇿',
    temperature: '22°C',
    rainfall: 'Normal',
    condition: 'Partly Cloudy',
    impact: 'favorable for wheat growth',
    alert: 'Optimal conditions for harvest',
    severity: 'good',
    icon: Cloud
  },
  {
    country: 'Azerbaijan',
    flag: '🇦🇿',
    temperature: '31°C',
    rainfall: 'Low',
    condition: 'Sunny',
    impact: 'irrigation needed for vineyards',
    alert: 'Dry conditions continue',
    severity: 'caution',
    icon: Sun
  },
  {
    country: 'Turkey',
    flag: '🇹🇷',
    temperature: '26°C',
    rainfall: 'Normal',
    condition: 'Clear',
    impact: 'excellent for fruit harvest',
    alert: 'Perfect weather for agriculture',
    severity: 'good',
    icon: Sun
  },
  {
    country: 'Kyrgyzstan',
    flag: '🇰🇬',
    temperature: '18°C',
    rainfall: 'High',
    condition: 'Rainy',
    impact: 'pasture lands recovering well',
    alert: 'Beneficial for livestock feed',
    severity: 'good',
    icon: CloudRain
  },
  {
    country: 'Turkmenistan',
    flag: '🇹🇲',
    temperature: '35°C',
    rainfall: 'Very Low',
    condition: 'Hot',
    impact: 'cotton needs intensive irrigation',
    alert: 'Heat stress warning for crops',
    severity: 'warning',
    icon: Sun
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'good':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'caution':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'warning':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const AgroClimateMonitor = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-blue-700 mb-4" style={{ fontSize: '24px' }}>Agro-Climate Monitor</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time weather conditions and agricultural impact analysis across member countries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {climateData.map((data) => {
            const IconComponent = data.icon;
            return (
              <Card key={data.country} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{data.flag}</span>
                      <CardTitle className="text-lg">{data.country}</CardTitle>
                    </div>
                    <IconComponent className="w-6 h-6 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Weather Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Temp:</span>
                      <span className="font-medium">{data.temperature}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">Rain:</span>
                      <span className="font-medium">{data.rainfall}</span>
                    </div>
                  </div>

                  {/* Current Condition */}
                  <div className="text-center py-2">
                    <p className="text-gray-600">{data.condition}</p>
                  </div>

                  {/* Alert Badge */}
                  <Badge 
                    variant="outline" 
                    className={`w-full justify-center py-2 ${getSeverityColor(data.severity)}`}
                  >
                    {data.severity === 'warning' && <AlertTriangle className="w-4 h-4 mr-1" />}
                    {data.alert}
                  </Badge>

                  {/* Agricultural Impact */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Impact:</span> {data.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4</div>
            <p className="text-sm text-gray-600">Favorable Conditions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <p className="text-sm text-gray-600">Caution Required</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">2</div>
            <p className="text-sm text-gray-600">Weather Warnings</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">7</div>
            <p className="text-sm text-gray-600">Monitored Regions</p>
          </div>
        </div>
      </div>
    </section>
  );
};