import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const initState = [
  {
    id: Math.random() * 10 ** 9,
    title: 'Red Queen',
    category: 'Action',
  },
  {
    id: Math.random() * 10 ** 9,
    title: 'React Fundamentals',
    category: 'Learning',
  },
  {
    id: Math.random() * 10 ** 9,
    title: 'It',
    category: 'Horror',
  },
];

const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
