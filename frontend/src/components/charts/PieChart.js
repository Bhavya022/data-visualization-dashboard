import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PieChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart',
      },
    },
  };

  if (!data || !data.labels || !data.datasets) {
    return <div>Loading...</div>;
  }

  return <Pie data={data} options={options} />;
};

export default PieChart;
