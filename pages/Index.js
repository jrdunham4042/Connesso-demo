import React from 'react';
import { Home, Building2, Users, ArrowRight } from 'lucide-react';

const Card = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const HomePage = () => {
  const options = [
    { type: 'customer', title: 'For Customers', icon: Home },
    { type: 'employee', title: 'For Employees', icon: Building2 },
    { type: 'partner', title: 'For Partners', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/api/placeholder/150/40" alt="Connesso" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </nav>
      </div>

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
          {options.map(({ type, title, icon: Icon }) => (
            <Card key={type} title={title}>
              <div className="flex items-center justify-center text-blue-600">
                <Icon className="w-12 h-12 mb-4" />
                <span className="mr-2">Try Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
