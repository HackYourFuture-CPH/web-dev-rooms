import './Avatar.css';

import PropTypes from 'prop-types';
import React from 'react';

export const Avatar = (props) => {
  return (
    <div className="avatar-images-container">
      <img
        className="main-avatar-images"
        src={props.avatarUrl}
        alt={props.name}
      />
    </div>
  );
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
