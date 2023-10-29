import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      
      <Nav.Link className='link' href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link className='link' href="/post">Posts</Nav.Link>
      <Nav.Link className='link' href="/assigned">Assigned</Nav.Link>
      <Nav.Link className='link' href="/chatbox">Chatbox</Nav.Link>
      {/* Add more links as needed */}
    </Nav>
  );
};

export default Sidebar;