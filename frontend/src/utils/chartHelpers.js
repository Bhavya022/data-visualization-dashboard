// Helper function to generate random colors for chart data
const generateRandomColor = (opacity = 1) => {
  const randomColorPart = () => Math.floor(Math.random() * 256);
  return `rgba(${randomColorPart()}, ${randomColorPart()}, ${randomColorPart()}, ${opacity})`;
};

// Function to prepare data for a bar chart
export const prepareBarChartData = (data) => {
  const labels = data.map(item => item.year);
  const dataset = {
    label: 'Average Intensity',
    data: data.map(item => item.averageIntensity),
    backgroundColor: data.map(() => generateRandomColor(0.6)),
    borderColor: data.map(() => generateRandomColor(1)),
    borderWidth: 1
  };

  return {
    labels,
    datasets: [dataset]
  };
};

// Function to prepare data for a line chart
export const prepareLineChartData = (data) => {
  const labels = data.map(item => item.year);
  const dataset = {
    label: 'Average Likelihood',
    data: data.map(item => item.averageLikelihood),
    backgroundColor: generateRandomColor(0.2),
    borderColor: generateRandomColor(1),
    borderWidth: 1,
    fill: false
  };

  return {
    labels,
    datasets: [dataset]
  };
};

// Function to prepare data for a pie chart
export const preparePieChartData = (data) => {
  const labels = data.map(item => item.year);
  const dataset = {
    label: 'Average Relevance',
    data: data.map(item => item.averageRelevance),
    backgroundColor: data.map(() => generateRandomColor(0.6)),
  };

  return {
    labels,
    datasets: [dataset]
  };
};
