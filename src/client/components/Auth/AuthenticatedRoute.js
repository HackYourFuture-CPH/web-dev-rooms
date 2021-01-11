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
          if (userRole === requiredRole) {
            return children;
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
