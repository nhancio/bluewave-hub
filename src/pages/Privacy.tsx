import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, information we obtain automatically when you visit our website.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We do not share your personal information with companies, organizations, or individuals outside of our company except in the following cases:
        </p>
        <ul>
          <li>With your consent</li>
          <li>For legal reasons</li>
          <li>To protect rights and property</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;