import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import InsightList from './InsightList';
import Visualization from './Visualization';
import { fetchData } from '../services/api';
import { processData } from '../utils/dataProcessing';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: '',
    likelihood: '',
    intensity: '',
    relevance: '',
    year: '',
    url: '',
  });

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const result = await fetchData(filters);
        console.log('API response:', result);
        setInsights(result);
        setProcessedData(processData(result));
      } catch (error) {
        console.error('Error fetching insights:', error);
      }
    };
    fetchInsights();
  }, [filters]);

  return (
    <Container className="dashboard">
      <h1 className="mb-4">Data Visualization Dashboard</h1>
      <Filter setFilters={setFilters} />
      <Visualization insights={processedData} />
      <InsightList insights={insights} />
    </Container>
  );
};

export default Dashboard;
