import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [30, 20, 50],
      backgroundColor: ['red', 'blue', 'yellow'],
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
