import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <header className="py-3">
            <h1>Data Visualization Dashboard</h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <aside className="py-3">
            {/* Sidebar or additional controls could go here */}
          </aside>
        </Col>
        <Col md={9}>
          <main className="py-3">
            {children}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
