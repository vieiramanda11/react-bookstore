import { combineReducers } from 'redux';
import booksReducer from './books';

combineReducers({
  books: booksReducer,
});
