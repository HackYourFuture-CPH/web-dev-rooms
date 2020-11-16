import React from 'react';
import PropTypes from 'prop-types';

import './StudyGroupLogo.styles.css';

export const StudyGroupLogo = (props) => {
  return (
    <i>
      <img src={props.path} width="50" alt="logo" />
    </i>
  );
};

StudyGroupLogo.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string),
};

StudyGroupLogo.defaultProps = {
  path: [''],
};
