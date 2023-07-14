import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Header from './Components/Header';
import './App.css';


function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;
