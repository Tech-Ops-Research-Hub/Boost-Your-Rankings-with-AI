import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Bento from './components/Bento';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Clients from './components/Clients';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Section */}
   <main className="w-full flex-grow flex flex-col items-center justify-center">
				<Hero />
				<Bento />
				<Features />
        <Clients />
        <Pricing />
        <SEO />
	</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
