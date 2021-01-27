import './ErrorBoundary.styles.css';

import PropTypes from 'prop-types';
import React from 'react';

import HyfBigLogo from '../HyfBigLogo/HyfBigLogo';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-boundary">
          <HyfBigLogo />
          <h1>An error occurred</h1>

          <p>Please check console for more information</p>
        </main>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
