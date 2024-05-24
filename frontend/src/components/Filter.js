import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Filter = ({ setFilters }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [inputValue, setInputValue] = useState('');

  const filterOptions = [
    { value: 'endYear', label: 'End Year' },
    { value: 'topics', label: 'Topics' },
    { value: 'sector', label: 'Sector' },
    { value: 'region', label: 'Region' },
    { value: 'pestle', label: 'PEST' },
    { value: 'source', label: 'Source' },
    { value: 'swot', label: 'SWOT' },
    { value: 'country', label: 'Country' },
    { value: 'city', label: 'City' },
    { value: 'likelihood', label: 'Likelihood' },
    { value: 'intensity', label: 'Intensity' },
    { value: 'relevance', label: 'Relevance' },
    { value: 'year', label: 'Year' },
    { value: 'url', label: 'URL' },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApplyFilter = () => {
    if (selectedFilter && inputValue) {
      setFilters(prevFilters => ({
        ...prevFilters,
        [selectedFilter]: inputValue,
      }));
    }
  };

  return (
    <Form className="filter">
      <Row className="align-items-center mb-3">
        <Col xs={3}>
          <Form.Label>Select Filter</Form.Label>
        </Col>
        <Col xs={3}>
          <Form.Control as="select" value={selectedFilter} onChange={handleFilterChange}>
            <option value="">Select Filter</option>
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Control>
        </Col>
        <Col xs={3}>
          <Form.Control type="text" placeholder="Enter Value" value={inputValue} onChange={handleInputChange} />
        </Col>
        <Col xs={3}>
          <Button variant="primary" onClick={handleApplyFilter}>
            Apply Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
