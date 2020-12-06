import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';

import './index.css';

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root'),
);
