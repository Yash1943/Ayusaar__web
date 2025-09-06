import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Blog from './pages/blog';
import Products from './pages/Products';
// import Blog from './pages/Blog';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#faf5f0]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;