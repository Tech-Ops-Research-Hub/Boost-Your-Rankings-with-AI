import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Section */}
   <main className="w-full flex-grow flex flex-col items-center justify-center">
				<Hero />
	</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
