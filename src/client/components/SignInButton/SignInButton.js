import React from 'react';
import './SignInButton.styles.css';
import PropTypes from 'prop-types';

const SignInButton = (props) => {
  return (
    <button
      type="submit"
      className="button-sign-with-slack"
      onClick={props.onClick}
    >
      <img
        alt="Sign in with Slack"
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </button>
  );
};
// add propType for onclick function
SignInButton.propTypes = { onClick: PropTypes.func };
SignInButton.defaultProps = { onClick: null };

export default SignInButton;
