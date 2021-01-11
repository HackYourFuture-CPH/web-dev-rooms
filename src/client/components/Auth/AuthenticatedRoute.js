import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ErrorPage from '../../containers/404Page/404Page.component';
import { useUser } from '../../context/userContext';

function AuthenticatedRoute({ children, requiredRole, ...rest }) {
  const { isAuthenticated, isNewUser, userRole } = useUser();

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
          // I am just adding here but i am not sure whether it is the right place
          if (userRole === requiredRole) {
            return children; // no idea on what to do if it matches
          }

          return <ErrorPage />;
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
  requiredRole: PropTypes.string,
};

AuthenticatedRoute.defaultProps = {
  requiredRole: '',
};
