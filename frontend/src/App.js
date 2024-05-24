import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import { fetchData } from './services/api';
import { processData } from './utils/dataProcessing';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
    const fetchInitialData = async () => {
      const result = await fetchData();
      setData(result);
      setFilteredData(processData(result));
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    // Implement filtering logic here
    const filtered = processData(data, filters);
    setFilteredData(filtered);
  }, [data, filters]);

  return (
    <Layout>
      <Filter filters={filters} setFilters={setFilters} />
      <Dashboard data={filteredData} />
    </Layout>
  );
};

export default App;

