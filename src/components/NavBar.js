import { useState, useEffect } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll")
  }, []);

  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img alt="Logo"/>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icon"></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>

        <span className="navbar-text">
          <div className="socila-icon">
            <a href="#"><img alt="" /></a>
            <a href="#"><img alt="" /></a>
            <a href="#"><img alt="" /></a>
          </div>

          <button className="vvd" onClick={() => console.log('ok')}>
            <span>Let,s Connect</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}