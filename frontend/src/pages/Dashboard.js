import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import InsightList from '../components/InsightList';
import Visualization from '../components/Visualization';
import api from '../services/api';
import { processData } from '../utils/dataProcessing';

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [processedData, setProcessedData] = useState({});
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getInsights(filters);
      setInsights(result);
      setProcessedData(processData(result));
    };
    fetchData();
  }, [filters]);

  return (
    <div className="dashboard">
      <Filter setFilters={setFilters} />
      <Visualization data={processedData} />
      <InsightList insights={insights} />
    </div>
  );
}

export default Dashboard;
