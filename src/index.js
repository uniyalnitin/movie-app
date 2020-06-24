import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import combineReducer from './reducers';

const store = createStore(combineReducer); // object on which the store will work

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
