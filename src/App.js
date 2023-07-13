import React from 'react';
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import About from './components/pages/About';
import Posts from './components/pages/Posts';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About as</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/about" element={<About/>}/>

        <Route exact path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
