import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Portfolio from './components/Portfolio.tsx';
import EventPortfolio from './components/Portfolio/EventPortfolio.tsx';
import FashionPortfolio from './components/Portfolio/FashionPortfolio.tsx';
import PortraitPortfolio from './components/Portfolio/PortraitPortfolio.tsx';
import ProductPortfolio from './components/Portfolio/ProductPortfolio.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/event" element={<EventPortfolio />} />
        <Route path="/portfolio/fashion" element={<FashionPortfolio />} />
        <Route path="/portfolio/portrait" element={<PortraitPortfolio />} />
        <Route path="/portfolio/product" element={<ProductPortfolio />} />
      </Routes>
    </Router>
  </StrictMode>
);
