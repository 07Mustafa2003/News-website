// resources/js/components/DashboardHome.jsx
import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-bold">Overview</h3>
          <p className="mt-2">This is an overview of the dashboard.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-bold">Statistics</h3>
          <p className="mt-2">Some statistics here.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-bold">Recent Activity</h3>
          <p className="mt-2">Details about recent activity.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
