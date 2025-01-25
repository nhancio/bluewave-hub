import React from 'react';
import { FileDown } from 'lucide-react';

const Resources = () => {
  const resources = [
    { title: 'Getting Started Guide', size: '2.5 MB' },
    { title: 'Best Practices', size: '1.8 MB' },
    { title: 'Documentation', size: '3.2 MB' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <FileDown className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">Size: {resource.size}</p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;