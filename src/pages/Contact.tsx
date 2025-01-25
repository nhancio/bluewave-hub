import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex items-center space-x-2">
            <Mail className="text-primary" />
            <a href="mailto:hello@nhancio.com" className="text-primary hover:underline">
              hello@nhancio.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-primary" />
            <a href="tel:7095288950" className="text-primary hover:underline">
              709-528-8950
            </a>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;