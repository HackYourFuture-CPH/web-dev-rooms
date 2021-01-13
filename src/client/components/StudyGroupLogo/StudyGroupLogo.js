import React from 'react';
import PropTypes from 'prop-types';

import './StudyGroupLogo.styles.css';

export const StudyGroupLogo = (props) => {
  return (
    <span className="rounded-circle">
      <img src={props.path} width="50" alt="logo" className="logo" />
    </span>
  );
};

StudyGroupLogo.propTypes = {
  path: PropTypes.string,
};

StudyGroupLogo.defaultProps = {
  path: '',
};
