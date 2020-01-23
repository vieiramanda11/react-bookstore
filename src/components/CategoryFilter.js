import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterCategory }) => {
  const handleFilterChange = (event) => {
    const { value } = event.target;
    console.log(value);
    filterCategory(value);
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="category" onChange={handleFilterChange}>
      <option value="all">All</option>
      { categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
