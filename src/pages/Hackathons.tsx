import React from 'react';

const Hackathons = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold mb-4">Hackathons</h1>
        <p className="text-xl text-gray-600">Coming Soon</p>
        <div className="animate-pulse">
          <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;