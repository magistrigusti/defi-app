import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Header from './Components/Header';
import './App.css';


function App() {
  const location = useLocation();

  return (
    <Container>
        <Header />

        <AnimatePresence>
        
        </AnimatePresence>

        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </Container>
  )
}

export default App;
