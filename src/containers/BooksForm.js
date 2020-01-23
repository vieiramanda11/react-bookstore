import React, { useState } from 'react';

const BooksForm = () => {
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

  return (
    <form onChange={handleChange}>
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
