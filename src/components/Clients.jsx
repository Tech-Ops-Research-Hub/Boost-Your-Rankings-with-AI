import React from 'react';
import Avatar from "/src/assets/images/Avatar@3x 1.png";

const Clients = () => {
  return (
    <section className="bg-black w-full text-white py-24">
      <div className="max-w mx-auto text-center px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">Our clients</h2>
        <p className="text-gray-400 mb-12">
          Hear firsthand how our solutions have boosted online success for users like you.
        </p>

        {/* Client Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-center">
            <div className="w-64 h-64 bg-purple-700 rounded-lg overflow-hidden">
              <img
                src={Avatar}
                alt="Client"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="text-left md:ml-[-12rem]">
            <p className="text-xl italic leading-relaxed mb-4">
              "This product has completely transformed how I manage my projects and deadlines."
            </p>
            <p className="text-lg font-semibold">Talia Taylor</p>
            <p className="text-gray-400">Digital Marketing Director @ Quantum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
