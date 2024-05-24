import axios from 'axios';

const API_URL = 'http://localhost:8080/api/insights';

export const fetchInsights = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchFilteredInsights = async (filters) => {
  const query = new URLSearchParams(filters).toString();
  const response = await axios.get(`${API_URL}?${query}`);
  return response.data;
};
