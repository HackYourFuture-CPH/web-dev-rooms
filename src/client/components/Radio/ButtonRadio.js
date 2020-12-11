import React from 'react';
import PropTypes from 'prop-types';

// const users = ['Student', 'Mentor', 'Admin'];
function ButtonRadio(props) {
  const { onClick } = props;
  const onclicked = (e) => {
    onClick(e);
  };

  return (
    <div className="btn-group">
      <div className="radiobutton-student">
        <button type="button" name={props.student} onClick={onclicked}>
          Student
        </button>
      </div>
      <div className="radiobutton-mentor">
        <button type="button" name={props.mentor} onClick={onclicked}>
          Mentor
        </button>
      </div>
      <div className="radiobutton-admin">
        <button type="button" name={props.admin} onClick={onclicked}>
          Admin
        </button>
      </div>
    </div>
  );
}
ButtonRadio.propTypes = {
  student: PropTypes.string,
  mentor: PropTypes.string,
  admin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ButtonRadio.defaultProps = {
  student: 'student',
  mentor: 'mentor',
  admin: 'admin',
};
export default ButtonRadio;
