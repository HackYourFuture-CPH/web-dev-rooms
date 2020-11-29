import React from 'react';
import PropTypes from 'prop-types';

import './ButtonRegisterYourSelf.styles.css';

export const ButtonRegisterYourSelf = (props) => {
  return (
    <button className="button-register-yourself" type="submit">
      {props.text}
    </button>
  );
};

ButtonRegisterYourSelf.propTypes = {
  text: PropTypes.string,
};

ButtonRegisterYourSelf.defaultProps = {
  text: '',
};
