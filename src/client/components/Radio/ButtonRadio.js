import React from 'react';

const users = ['Student', 'Mentor', 'Admin'];
function ButtonRadio() {
  return (
    <div className="btn-group">
      {users.map((user) => (
        <>
          <button type="button" name="user" className="radiobutton">
            {' '}
            {user}
          </button>
        </>
      ))}
    </div>
  );
}

export default ButtonRadio;
