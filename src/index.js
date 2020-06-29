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

export function connect(callback){
  return function(Component){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
        // this.unsubscribe = this.props.store.subscribe();
      }

      componentWillUnmount(){
        // this.unsubscribe();
        console.log("hello")
      }

      render(){
        const { store } = this.props;
        let state = store.getState();
        console.log('state', state.movies.list);
        const dataToBePassedAsProps = callback(state);
        console.log("dataToBePassed", dataToBePassedAsProps)
        return (
          <Component store={store} subscribe={store.subscribe} dispatch={store.dispatch} {...dataToBePassedAsProps}/>
        );
      }
    }

    class ConnectedComponentWrapper extends React.Component{
      render(){
        return <StoreContext.Consumer>
          {store => <ConnectedComponent store={store} />}
        </StoreContext.Consumer>
      }
    }
    return ConnectedComponentWrapper;
  }
}

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
