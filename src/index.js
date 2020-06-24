import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import combineReducer from './reducers';
import { applyMiddleware } from 'redux';

//(store) => (next) => (action)
const logger = (store) => (next) => (action) => {
  console.log("ACTION_TYPE", action.type);
  next(action);
} 

const store = createStore(combineReducer, applyMiddleware(logger)); // object on which the store will work

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
