import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <Navbar />
          {/* Main Content Goes Here */}
          <div className="mt-3">
            <h2>Welcome to the Dashboard!</h2>
            {/* Add your dashboard content here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;