import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import rootReducer from './reducers';

const store = createStore(rootReducer); // object on which the store will work

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
