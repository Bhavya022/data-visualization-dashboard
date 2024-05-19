
import React from 'react';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

const Visualization = ({ data }) => {
  // Ensure data is properly structured
  if (!data || !data.barChartData || !data.lineChartData || !data.pieChartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="visualization">
      <div className="chart">
        <BarChart data={data.barChartData} />
      </div>
      <div className="chart">
        <LineChart data={data.lineChartData} />
      </div>
      <div className="chart">
        <PieChart data={data.pieChartData} />
      </div>
    </div>
  );
}

export default Visualization;
