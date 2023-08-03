import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import movieReducer from './reducers';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
const store = createStore(movieReducer); 


ReactDOM.render(
  <Provider store = {store} >
     <Router>
      <App />
  </Router>
  </Provider>
 ,
  document.getElementById('root')
);
