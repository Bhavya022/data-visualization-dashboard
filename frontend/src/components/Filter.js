import React from 'react';

const Filter = ({ setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="filter">
      <input type="text" name="endYear" placeholder="End Year" onChange={handleChange} />
      <input type="text" name="topics" placeholder="Topics" onChange={handleChange} />
      <input type="text" name="sector" placeholder="Sector" onChange={handleChange} />
      <input type="text" name="region" placeholder="Region" onChange={handleChange} />
      <input type="text" name="pestle" placeholder="PESTLE" onChange={handleChange} />
      <input type="text" name="source" placeholder="Source" onChange={handleChange} />
      <input type="text" name="swot" placeholder="SWOT" onChange={handleChange} />
      <input type="text" name="country" placeholder="Country" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
    </div>
  );
}

export default Filter;
