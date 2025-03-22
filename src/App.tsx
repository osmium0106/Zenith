import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Logo */}
      <div className="fixed top-[calc(4px-40px)] left-4 z-50">
        <img src="/assets/images/logo.png" alt="Zenith Logo" className="h-48 w-48" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#303030] shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '300px' }}
      >
        <div className="h-full flex items-center justify-center">
          <nav>
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        className="fixed top-4 right-4 z-50 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-8 w-8" />
      </button>

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;