import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  1: {
    title: "Getting Started with Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    content: `
      Web development is an exciting field that combines creativity with technical skills. Whether you're just starting out or looking to expand your knowledge, this guide will help you understand the fundamentals.

      ## HTML, CSS, and JavaScript

      The three core technologies of web development are:
      - HTML for structure
      - CSS for styling
      - JavaScript for interactivity

      ## Getting Started

      1. Learn HTML basics
      2. Style with CSS
      3. Add interactivity with JavaScript
      4. Practice building simple websites
      5. Learn frameworks and libraries

      Remember, the key to success is consistent practice and continuous learning.
    `,
    date: "March 15, 2024",
    author: "John Doe"
  },
  2: {
    title: "Modern JavaScript Practices",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    content: `
      Modern JavaScript has evolved significantly over the years. This post covers essential practices that every developer should know.

      ## Key Concepts

      - ES6+ Features
      - Async/Await
      - Modules
      - Arrow Functions
      - Destructuring

      ## Best Practices

      1. Use const and let instead of var
      2. Implement proper error handling
      3. Write clean, maintainable code
      4. Follow established coding standards
      5. Use modern tooling

      Stay up to date with the latest JavaScript features and best practices.
    `,
    date: "March 14, 2024",
    author: "Jane Smith"
  },
  3: {
    title: "Team Collaboration in Tech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
    content: `
      Effective team collaboration is crucial in modern software development. Learn how to work better together.

      ## Key Areas

      - Communication
      - Version Control
      - Code Review
      - Documentation
      - Project Management

      ## Tips for Success

      1. Use clear communication channels
      2. Document decisions and processes
      3. Implement proper version control
      4. Regular team meetings
      5. Foster a positive team culture

      Good collaboration leads to better products and happier teams.
    `,
    date: "March 13, 2024",
    author: "Mike Johnson"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          By {post.author} on {post.date}
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="whitespace-pre-line">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;