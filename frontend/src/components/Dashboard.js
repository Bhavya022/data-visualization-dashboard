import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import InsightList from '../components/InsightList';
import Visualization from '../components/Visualization';

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/insights');
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching insights:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const query = new URLSearchParams(filters).toString();
        const response = await axios.get(`http://localhost:8080/api/insights?${query}`);
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching filtered insights:', error);
      }
    };
    if (Object.keys(filters).length > 0) {
      fetchFilteredData();
    }
  }, [filters]);

  return (
    <div className="dashboard">
      <Filter setFilters={setFilters} />
      <InsightList insights={insights} />
      <Visualization insights={insights} />
    </div>
  );
};

export default Dashboard;
