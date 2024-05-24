import axios from 'axios';

export const fetchData = async (filters) => {
  try {
    const queryString = Object.keys(filters)
      .map(key => `${key}=${encodeURIComponent(filters[key])}`)
      .join('&');
    const response = await axios.get(`http://localhost:8080/api/insights/filter?${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
