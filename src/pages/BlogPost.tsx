import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog Post {id}</h1>
        <img
          src="/placeholder.svg"
          alt="Blog post header"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more content as needed */}
      </article>
    </div>
  );
};

export default BlogPost;