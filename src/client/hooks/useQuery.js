import axios from 'axios';
import { useEffect, useState } from 'react';

export function useQuery(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    axios
      .get(url)
      .then((r) => {
        setData(r.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
