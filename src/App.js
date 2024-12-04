import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/" end>Innomatics Research Labs</NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-item nav-link" to="/blog">Blog</NavLink>
            <NavLink className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
          </div>
        </nav>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '100vw' }} transition={{ duration: 0.5 }}>
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.5 }}>
                <About />
              </motion.div>
            }
          />
          <Route 
            path="/services/*" 
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <Services />
              </motion.div>
            }
          />
          <Route 
            path="/contact" 
            element={
              <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} exit={{ y: '100vh' }} transition={{ duration: 0.5 }}>
                <Contact />
              </motion.div>
            }
          />
          <Route 
            path="/blog" 
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <Blog />
              </motion.div>
            }
          />
          <Route 
            path="/portfolio" 
            element={
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.5 }}>
                <Portfolio />
              </motion.div>
            }
          />
          <Route 
            path="*" 
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
