import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample blog cards - replace with actual data */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Blog thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Blog Post Title {item}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;