import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import BrewOfficialsLanding from './BrewOfficialsLanding';
import './App.css';

// Navbar Component
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Esports', path: '/esports' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Agency', path: '/agency' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-70 shadow-md'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <Link to="/" className={`font-bold text-xl ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Brew Officials
        </Link>
        <ul className="flex space-x-6 text-sm md:text-base">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-purple-500 transition-colors duration-300 ${
                  location.pathname === path
                    ? 'font-semibold underline decoration-purple-500'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded-full ${
            darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
          } hover:scale-110 transition-transform duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

// Page placeholders
const About = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">About Us</h1>
    <p>Vision, mission, biography, story, gallery coming soon.</p>
  </div>
);

const Esports = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Esports</h1>
    <p>Types of games, tournament records, updates, and registration form coming soon.</p>
  </div>
);

const Clothing = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Clothing Store</h1>
    <p>All types of clothes, age sections, new/old models, designs coming soon.</p>
  </div>
);

const Agency = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Agency Services</h1>
    <p>Services, past collaborations, contracts, fee structure, contact details coming soon.</p>
  </div>
);

const Products = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Products</h1>
    <p>Few product details will be provided here.</p>
  </div>
);

const Blog = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Blog / News</h1>
    <p>Latest news and blogs will appear here.</p>
  </div>
);

const Careers = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Careers / Join Us</h1>
    <p>Job openings and application forms coming soon.</p>
  </div>
);

const Contact = () => (
  <div className="pt-20 min-h-screen container mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p>Contact form and details coming soon.</p>
  </div>
);

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(d => !d);

  // Programmatic navigation for buttons on landing page
  // Wrap BrewOfficialsLanding to pass the navigation function down
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Routes>
        <Route
          path="/"
          element={
            <BrewOfficialsLanding
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              onExplore={() => navigate('/products')}
              onWatchStory={() => alert('Story video/modal coming soon!')}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
