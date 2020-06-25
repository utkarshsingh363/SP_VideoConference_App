import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 
import {BrowserRouter} from 'react-router-dom'

import {createStore, combineReducers, applyMiddleware} from 'redux'
// import reducer from './store/reducer'
import {main_reducer} from './store/components/main_reducer'
import {drawer_admin_reducer} from './store/components/drawer_admin_reducer'
import {drawer_setting_reducer} from './store/components/drawer_setting_reducer'
import {Provider} from 'react-redux'

const rootReducer=combineReducers({
  main:main_reducer,
  drawerAd:drawer_admin_reducer,
  drawerSet:drawer_setting_reducer
})

const logger = store => {
  return next => {
    return action =>{
      console.log('[Middleware] Dispaching', action)
      const result = next(action)
      console.log('[Middleware] next state',store.getState())
      return result
    }
  }
}

const store= createStore(rootReducer, applyMiddleware(logger))

const app=(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
