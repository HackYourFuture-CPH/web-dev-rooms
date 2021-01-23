import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useUser } from '../context/userContext';

/**
 * Fetches data from the specified URL.
 *
 * @param {string} url
 * @returns
 */
export function useQuery(url) {
  const { token } = useUser();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(() => {
    setError(null);
    setLoading(true);

    const config = token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : undefined;
    axios
      .get(url, config)
      .then((r) => {
        setData(r.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [url, token]);

  useEffect(() => {
    fetch();
    // do not depend on fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    data,
    loading,
    error,
    fetch,
  };
}
