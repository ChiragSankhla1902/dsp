import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducer/reducer";

const store1 = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store1}>

    <App />

  </Provider>,
  document.getElementById('root')
);
