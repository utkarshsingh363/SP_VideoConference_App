import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import {BrowserRouter} from 'react-router-dom'


import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const store =configureStore(reducer,applyMiddleware(logger, thunk))

console.log("Your store is ",store  )

const app=(

  <BrowserRouter>
    <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
ReactDOM.render(app ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
