import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-6 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Boost your rankings with AI.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 hover:shadow-lg transition duration-300">
          Get Started
        </button>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
