import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Button() {
  const notify = () => toast('Wow so easy !');

  return (
    <div>
      <button type="button" onClick={notify}>
        ReactToastify
      </button>
      <ToastContainer />
    </div>
  );
}
