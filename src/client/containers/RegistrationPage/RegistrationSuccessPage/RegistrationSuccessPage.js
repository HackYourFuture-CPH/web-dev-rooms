import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from '../../../components/Loader';
import { useUser } from '../../../context/userContext';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export function RegistrationSuccessPage() {
  const { fetch } = useAuthenticatedFetch();
  const { login, logout } = useUser();
  const history = useHistory();

  // TODO: redirect to returnUrl query parameter if there
  useEffect(() => {
    fetch(`/api/self`)
      .then((user) => {
        login(user);
        history.push('/');
      })
      .catch(() => {
        logout();
        toast('Cannot log you in, please trying again.');
        history.push('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
}
