import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export function NavItem({ className, to, icon, children }) {
  return (
    <div className={className}>
      <Link to={to}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {children && <h4>{children}</h4>}
      </Link>
    </div>
  );
}

NavItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
};

NavItem.defaultProps = {
  className: '',
  icon: null,
  children: null,
};
