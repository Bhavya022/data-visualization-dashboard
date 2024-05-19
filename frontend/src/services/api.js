import axios from 'axios';

const API_URL = 'http://localhost:8080/api/insights';

const api = {
  getInsights: async (filters) => {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  },
};

export default api;
