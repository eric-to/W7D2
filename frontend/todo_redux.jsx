import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/roots';
import allTodos from './reducers/selectors';

window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(
    <Root store={store}/>,
    content
  );
});