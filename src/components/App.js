import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <div className="app">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
