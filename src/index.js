import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './Reducers/rootReducer';
import { getUsers } from './actions/Action';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(getUsers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
