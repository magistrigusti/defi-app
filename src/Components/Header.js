import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  let activeStyle = {
    color: "#fff",
  }
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>Dmitrii Pavlovich</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/"
                  style={({isActive}) => (isActive ? activeStyle : undefined)}
              >Home</NavLink>

              <NavLink className="nav-link" to="/projects"
                  style={({isActive}) => (isActive ? activeStyle : undefined)}
              >Projects</NavLink>

              <NavLink className="nav-link" to="/services"
                  style={({isActive}) => (isActive ? activeStyle : undefined)}
              >Services</NavLink>

              <NavLink className="nav-link" to="/about"
                  style={({isActive}) => (isActive ? activeStyle : undefined)}
              >About</NavLink>

              <NavLink className="nav-link" to="/contacts"
                  style={({isActive}) => (isActive ? activeStyle : undefined)}
              >Contacts</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;