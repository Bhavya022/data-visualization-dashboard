import React from 'react';

const InsightList = ({ insights }) => {
  return (
    <div className="insight-list">
      {insights.map((insight) => (
        <div key={insight._id} className="insight-item">
          <h3>{insight.title}</h3>
          <p>{insight.insight}</p>
          <a href={insight.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default InsightList;
