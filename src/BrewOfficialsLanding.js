// BrewOfficialsLanding.js
import React from 'react';

const BrewOfficialsLanding = ({ darkMode, toggleDarkMode, onExplore, onWatchStory }) => {
  return (
    <section className={`min-h-screen flex flex-col justify-center items-center px-6 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Brew Officials</h1>
      <p className="mb-8 max-w-xl text-center text-lg">
        Your journey to greatness starts here. Explore our products or watch our story!
      </p>
      <div className="space-x-4">
        <button
          onClick={onExplore}
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Explore Products
        </button>
        <button
          onClick={onWatchStory}
          className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-100 transition"
        >
          Watch Our Story
        </button>
      </div>
    </section>
  );
};

export default BrewOfficialsLanding;
