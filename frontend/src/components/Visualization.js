import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

const Visualization = ({ insights }) => {
  return (
    <div className="visualization">
      <Row>
        <Col md={6}>
          <BarChart insights={insights} />
        </Col>
        <Col md={6}>
          <LineChart insights={insights} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <PieChart insights={insights} />
        </Col>
      </Row>
    </div>
  );
};

export default Visualization;
