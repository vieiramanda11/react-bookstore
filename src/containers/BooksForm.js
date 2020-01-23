import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'category') {
      setState({
        title: state.title,
        category: value,
      });
    }
    if (name === 'title') {
      setState({
        title: value,
        category: state.category,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = state;
    if (title) {
      createBook({ id: (Math.random() * (10 ** 9)), title, category });
      setState({
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input type="text" value={state.title} name="book" placeholder="New book" />
      <select value={state.category}>
        { categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Create new book</button>
    </form>
  );
};

export default BooksForm;
