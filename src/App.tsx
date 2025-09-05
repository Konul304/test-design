import React from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ExportTicker } from './components/ExportTicker';
import { EventsSection } from './components/EventsSection';
import { StartupSection } from './components/StartupSection';
import { AgroClimateMonitor } from './components/AgroClimateMonitor';
import { MarketAnalytics } from './components/MarketAnalytics';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Banner Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 border-b-4 border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <HeroBanner />
          </div>
        </section>

        {/* Export Requests Ticker Section */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-b-4 border-blue-200">
          <ExportTicker />
        </section>

        {/* Events Section */}
        <section className="bg-gradient-to-br from-gray-50 to-green-50 border-b-4 border-gray-200">
          <EventsSection />
        </section>

        {/* Startup Investment Section */}
        <section className="border-b-4 border-green-200">
          <StartupSection />
        </section>

        {/* Agro-Climate Monitor Section */}
        <section className="bg-gradient-to-r from-blue-50 to-white border-b-4 border-blue-200">
          <AgroClimateMonitor />
        </section>

        {/* Market Analytics Section */}
        <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white border-b-4 border-green-200">
          <MarketAnalytics />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}