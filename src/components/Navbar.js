import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;