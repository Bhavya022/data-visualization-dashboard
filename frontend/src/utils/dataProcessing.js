export const processDataForCharts = (data) => {
  return {
      labels: data.map(item => item.title),
      datasets: [
          {
              label: 'Intensity',
              data: data.map(item => item.intensity),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
              label: 'Likelihood',
              data: data.map(item => item.likelihood),
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
          {
              label: 'Relevance',
              data: data.map(item => item.relevance),
              backgroundColor: 'rgba(255, 159, 64, 0.6)',
          }
      ]
  };
};
