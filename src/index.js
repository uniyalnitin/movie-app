import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import combineReducer from './reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
//(store) => (next) => (action)
const logger = (store) => (next) => (action) => {
  if(typeof action != 'function'){
    console.log("ACTION_TYPE", action.type);
  }
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   if(typeof action == 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(combineReducer, applyMiddleware(logger, thunk)); // object on which the store will work

export const StoreContext = createContext();

class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App store = {store}/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
