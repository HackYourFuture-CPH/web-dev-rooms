import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as cn from 'classnames';

import './ButtonRadio.css';

function ButtonRadio(props) {
  const [role, setRole] = useState('');

  const { onClick } = props;
  const roleChanged = (e) => {
    onClick(e.target.name);
    setRole(e.target.name);
  };

  return (
    <div className="btn-group">
      <div className="radiobutton student">
        <button
          type="button"
          className={cn({ selected: props.student === role })}
          name={props.student}
          onClick={roleChanged}
        >
          Student
        </button>
      </div>
      <div className="radiobutton mentor">
        <button
          type="button"
          className={cn({ selected: props.mentor === role })}
          name={props.mentor}
          onClick={roleChanged}
        >
          Mentor
        </button>
      </div>
      <div className="radiobutton admin">
        <button
          type="button"
          className={cn({ selected: props.admin === role })}
          name={props.admin}
          onClick={roleChanged}
        >
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
