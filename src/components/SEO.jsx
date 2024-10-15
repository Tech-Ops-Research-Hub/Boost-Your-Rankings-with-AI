import React from 'react';

const SEO = () => {
  return (
    <section className="relative bg-black text-white py-24" >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700 to-black opacity-80"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Text */}
        <h2 className="text-4xl font-bold mb-6">AI-driven SEO for everyone.</h2>
        <p className="text-gray-400 mb-8">No credit card required · 7-days free trial</p>

        {/* Form */}
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent border border-gray-600 px-4 py-2 text-lg text-white focus:outline-none focus:border-white rounded-l-lg"
          />
          <button className="bg-white text-black px-6 py-2 text-lg font-semibold rounded-r-lg">
            Join waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEO;
