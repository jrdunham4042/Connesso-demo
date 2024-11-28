import React, { useState } from 'react';
import { Home, Building2, Users, ArrowRight, Shield, Sun, Bell } from 'lucide-react';

const DashboardCard = ({ title, value, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-gray-600">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
    {change && (
      <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
      </p>
    )}
  </div>
);

export default function Home() {
  const [view, setView] = useState('landing');
  const [portalType, setPortalType] = useState(null);

  if (view === 'portal') {
    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow mb-6">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <img src="/api/placeholder/150/40" alt="Connesso" className="cursor-pointer" />
              <div className="flex space-x-4">
                {['dashboard', 'devices', 'automation', 'analytics', 'support'].map(tab => (
                  <button key={tab} className="capitalize text-gray-600 hover:text-gray-900">
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => setView('landing')} className="text-gray-600 hover:text-gray-900">
              Logout
            </button>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <DashboardCard 
              title={portalType === 'customer' ? 'Devices Online' : 'Total Customers'} 
              value={portalType === 'customer' ? '24/24' : '2,847'}
              change={12}
            />
            <DashboardCard 
              title="Energy Usage" 
              value="642 kWh" 
              change={-8}
            />
            <DashboardCard 
              title="Active Systems" 
              value="8" 
              change={4}
            />
            <DashboardCard 
              title="Security Status" 
              value="Protected" 
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/api/placeholder/150/40" alt="Connesso" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Smart Home Automation Made Simple
          </h1>
          <p className="text-xl text-gray-600">
            One platform for all your smart home needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { type: 'customer', title: 'For Customers', icon: Home },
            { type: 'employee', title: 'For Employees', icon: Building2 },
            { type: 'partner', title: 'For Partners', icon: Users }
          ].map(({ type, title, icon: Icon }) => (
            <button
              key={type}
              onClick={() => {
                setPortalType(type);
                setView('portal');
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <div className="flex items-center justify-center text-blue-600">
                <span className="mr-2">Try Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
