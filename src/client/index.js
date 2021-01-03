import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import AppContainer from './AppContainer';

Modal.setAppElement('#root');

ReactDOM.render(<AppContainer />, document.getElementById('root'));
