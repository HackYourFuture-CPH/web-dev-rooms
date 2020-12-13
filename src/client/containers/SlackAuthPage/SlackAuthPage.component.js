import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SlackAuthPage() {
  let location = useLocation();
  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
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
