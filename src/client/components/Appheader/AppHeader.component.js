// dumb/statless img component with props

import React from 'react';
import './AppHeader.style.css';
import PropTypes from 'prop-types';

export const AppHeader = (props) => {
  return (
    <div className="AppHeader-div">
      <div className="Appheader-img-container">
        <img src={props.path} alt="AppHeader" />
      </div>
    </div>
  );
};
AppHeader.propTypes = {
  path: PropTypes.string,
};

AppHeader.defaultProps = {
  path: '',
};
