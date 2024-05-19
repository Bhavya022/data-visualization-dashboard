// src/utils/dataProcessing.js
export const processData = (data) => {
  // Check if data is defined and is an array
  if (!data || !Array.isArray(data)) {
      console.error('Invalid data provided.');
      return {
        barChartData: { labels: [], datasets: [] },
        lineChartData: { labels: [], datasets: [] },
        pieChartData: { labels: [], datasets: [] },
      };
  }

  // Group data by year
  const groupedByYear = data.reduce((acc, item) => {
      const year = item.startYear;
      if (!acc[year]) {
          acc[year] = [];
      }
      acc[year].push(item);
      return acc;
  }, {});

  // Calculate summary statistics for each year
  const summaryData = Object.keys(groupedByYear).map(year => {
      const items = groupedByYear[year];
      const totalIntensity = items.reduce((sum, item) => sum + item.intensity, 0);
      const totalLikelihood = items.reduce((sum, item) => sum + item.likelihood, 0);
      const totalRelevance = items.reduce((sum, item) => sum + item.relevance, 0);

      return {
          year: year,
          count: items.length,
          averageIntensity: totalIntensity / items.length,
          averageLikelihood: totalLikelihood / items.length,
          averageRelevance: totalRelevance / items.length,
      };
  });

  const labels = summaryData.map(d => d.year);

  return {
    barChartData: {
      labels: labels,
      datasets: [
        {
          label: 'Average Intensity',
          data: summaryData.map(d => d.averageIntensity),
          backgroundColor: 'rgba(75,192,192,1)',
        },
      ],
    },
    lineChartData: {
      labels: labels,
      datasets: [
        {
          label: 'Average Likelihood',
          data: summaryData.map(d => d.averageLikelihood),
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: false,
        },
      ],
    },
    pieChartData: {
      labels: labels,
      datasets: [
        {
          label: 'Average Relevance',
          data: summaryData.map(d => d.averageRelevance),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
  };
};
