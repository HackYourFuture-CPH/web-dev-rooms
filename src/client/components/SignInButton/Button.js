import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick } = props;
  const clicked = () => {
    onClick();
  };
  return (
    <div className="slack-button">
      <button
        type="submit"
        className="button-sign-with-slack"
        onClick={clicked}
      >
        <img
          alt="Sign in with Slack"
          src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
          srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
        />
      </button>
    </div>
  );
};
// add propType for onclick function
Button.propTypes = { onClick: PropTypes.func.isRequired };

export default Button;
