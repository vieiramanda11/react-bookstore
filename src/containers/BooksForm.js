import React, { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [state, setState] = useState({
    title: '',
    category: categories[0],
  });

  return (
    <form>
      <input type="text" name="book" placeholder="New book" />
      <select>
        { categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Create new book</button>
    </form>
  );
};

export default BooksForm;
