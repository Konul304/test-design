import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Download, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

const exportData = [
  { month: 'Jan', exports: 1200, imports: 800, balance: 400 },
  { month: 'Feb', exports: 1400, imports: 900, balance: 500 },
  { month: 'Mar', exports: 1600, imports: 1100, balance: 500 },
  { month: 'Apr', exports: 1800, imports: 1200, balance: 600 },
  { month: 'May', exports: 2000, imports: 1300, balance: 700 },
  { month: 'Jun', exports: 2200, imports: 1400, balance: 800 },
];

const priceData = [
  { product: 'Wheat', price: 280, change: 5.2, trend: 'up', icon: '🌾' },
  { product: 'Cotton', price: 1850, change: -2.1, trend: 'down', icon: '🌱' },
  { product: 'Apples', price: 920, change: 8.7, trend: 'up', icon: '🍎' },
  { product: 'Oil Seeds', price: 450, change: 3.4, trend: 'up', icon: '🌻' },
];

const demandData = [
  { name: 'Wheat', value: 35, color: '#22c55e' },
  { name: 'Cotton', value: 25, color: '#3b82f6' },
  { name: 'Fruits', value: 20, color: '#f59e0b' },
  { name: 'Vegetables', value: 12, color: '#ef4444' },
  { name: 'Others', value: 8, color: '#8b5cf6' },
];

export const MarketAnalytics = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-blue-700 mb-4" style={{ fontSize: '24px' }}>Weekly Overview / Market & Trade Analytics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive market analysis and trade statistics for informed decision making
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span>Export-Import Balance (Million USD)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={exportData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="exports" fill="#22c55e" name="Exports" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="imports" fill="#3b82f6" name="Imports" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Demand Distribution */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChartIcon className="w-5 h-5 text-green-600" />
                <span>Demand Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demandData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {demandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {demandData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Trends */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-orange-600" />
              <span>Price Trends (USD per ton)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {priceData.map((item) => (
                <div key={item.product} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-green-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-medium text-gray-900">{item.product}</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                    <div className={`flex items-center space-x-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {item.trend === 'up' ?
                        <TrendingUp className="w-4 h-4" /> :
                        <TrendingDown className="w-4 h-4" />
                      }
                      <span className="text-sm font-medium">
                        {item.change > 0 ? '+' : ''}{item.change}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Exports</p>
                  <p className="text-3xl font-bold">$2.2B</p>
                  <p className="text-green-100 text-sm">+12.5% from last month</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Active Requests</p>
                  <p className="text-3xl font-bold">1,247</p>
                  <p className="text-blue-100 text-sm">+8.3% this week</p>
                </div>
                <Activity className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Trade Balance</p>
                  <p className="text-3xl font-bold">$800M</p>
                  <p className="text-orange-100 text-sm">Surplus maintained</p>
                </div>
                <BarChart3 className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Report Button */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5 mr-2" />
            Download Report (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};