import React from 'react';
import Hero from './components/Hero'

function App() {
  return (
		<div className=" font-inter min-h-screen flex flex-col items-center justify-center bg-black">
			<header className="bg-blue-500 w-full py-4 text-center text-white">
				<h1 className="text-2xl font-bold">Welcome</h1>
			</header>
			<main className="w-full flex-grow flex flex-col items-center justify-center">
				<Hero />
			</main>
			<footer className="py-4 text-center text-gray-500">
				<p>&copy; 2024 boost-your-rankings-with-AI</p>
			</footer>
		</div>
  );
}

export default App;
