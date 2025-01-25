import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
      <div className="prose max-w-none">
        <h2>1. Introduction</h2>
        <p>
          These terms and conditions outline the rules and regulations for the use of our Website.
        </p>
        
        <h2>2. License</h2>
        <p>
          Unless otherwise stated, we own the intellectual property rights for all material on the Website.
        </p>

        <h2>3. Restrictions</h2>
        <p>
          You are specifically restricted from all of the following:
        </p>
        <ul>
          <li>publishing any Website material in any other media</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material</li>
          <li>publicly performing and/or showing any Website material</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;