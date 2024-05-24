import React from 'react';

const InsightList = ({ insights }) => {
  return (
    <div className="insight-list">
      {insights.map((insight) => (
        <div key={insight._id} className="insight-item">
          <h3>{insight.title}</h3>
          <p>{insight.description}</p>
          <p><strong>Country:</strong> {insight.country}</p>
          <p><strong>Year:</strong> {insight.year}</p>
        </div>
      ))}
    </div>
  );
};

export default InsightList;
