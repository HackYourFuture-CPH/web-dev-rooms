import axios from 'axios';
import { useCallback, useState } from 'react';

import { useUser } from '../context/userContext';

export function useAuthenticatedFetch() {
  const [working, setWorking] = useState(false);

  const { token } = useUser();

  const fetch = useCallback(
    function authenticatedFetch(url, config) {
      setWorking(true);
      return axios({
        method: (config ? config.method : '') || 'get',
        url,
        data: config ? config.data : null,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => {
          setWorking(false);
          return r.data;
        })
        .catch((e) => {
          setWorking(false);
          throw e;
        });
    },
    [token],
  );

  return { fetch, working };
}
