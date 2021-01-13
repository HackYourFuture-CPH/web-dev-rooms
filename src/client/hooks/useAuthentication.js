import { useEffect, useState } from 'react';

export function useAuthentication() {
  // default not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, isLoading };
}
