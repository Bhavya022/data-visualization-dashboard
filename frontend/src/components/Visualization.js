import React from 'react';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

const Visualization = ({ insights }) => {
  return (
    <div className="visualization">
      <BarChart data={insights} />
      <LineChart data={insights} />
      <PieChart data={insights} />
    </div>
  );
};

export default Visualization;
