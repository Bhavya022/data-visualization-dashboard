import React, { useState } from 'react';

const Filter = ({ setFilters }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApplyFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [selectedFilter]: inputValue,
    }));
  };

  return (
    <div className="filter">
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="">Select Filter</option>
        <option value="endYear">End Year</option>
        <option value="topics">Topics</option>
        <option value="sector">Sector</option>
        <option value="region">Region</option>
        <option value="pestle">PEST</option>
        <option value="source">Source</option>
        <option value="swot">SWOT</option>
        <option value="country">Country</option>
        <option value="city">City</option>
        <option value="likelihood">Likelihood</option>
        <option value="intensity">Intensity</option>
        <option value="relevance">Relevance</option>
        <option value="year">Year</option>
        <option value="url">URL</option>
      </select>
      <input type="text" placeholder="Enter Value" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
