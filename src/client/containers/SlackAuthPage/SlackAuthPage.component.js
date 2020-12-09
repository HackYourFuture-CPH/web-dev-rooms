import React, { useEffect } from 'react';

const axios = require('axios');

export default function SelectionPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    axios.post(`/api/signin?code=${code}`);
    // .then((res) => {console.log('this is response', res)});
  }, []);
  return (
    <>
      <h1>This is authentication page</h1>
    </>
  );
}
