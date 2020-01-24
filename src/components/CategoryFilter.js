import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterCategory }) => {
  const handleFilterChange = (event) => {
    const { value } = event.target;
    filterCategory(value);
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="filter-container">
      <p>Filter by category: </p>
      <select className="filter" name="category" onChange={handleFilterChange}>
        <option value="All" className="option">All</option>
        { categories.map((category) => (
          <option key={category} value={category} className="option">{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
