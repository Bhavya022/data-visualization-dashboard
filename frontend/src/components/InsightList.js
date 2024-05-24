import React from 'react';
import { Table } from 'react-bootstrap';

const InsightList = ({ insights }) => (
  <div className="insight-list">
    <h3>Insights</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Country</th>
          <th>Region</th>
          <th>Intensity</th>
          <th>Likelihood</th>
          <th>Relevance</th>
        </tr>
      </thead>
      <tbody>
        {insights.map((insight, index) => (
          <tr key={index}>
            <td>{insight.title}</td>
            <td>{insight.country}</td>
            <td>{insight.region}</td>
            <td>{insight.intensity}</td>
            <td>{insight.likelihood}</td>
            <td>{insight.relevance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default InsightList;
