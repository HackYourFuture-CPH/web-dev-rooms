import React, { useEffect } from 'react';

const axios = require('axios');

export default function SlackAuthPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    axios.post(`/api/signin?code=${code}`).then(
      (response) => {
        return response;
      },
      (error) => {
        return error.message;
      },
    );
  }, []);
  return (
    <>
      <h1>This is authentication page</h1>
    </>
  );
}
