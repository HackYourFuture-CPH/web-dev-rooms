import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useUser } from '../../context/userContext';

function AuthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated, isNewUser } = useUser();

  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) => {
        if (isAuthenticated) {
          if (isNewUser) {
            return (
              <Redirect
                to={{
                  pathname: '/registration',
                  state: { from: location },
                }}
              />
            );
          }

          return children;
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default AuthenticatedRoute;

AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
