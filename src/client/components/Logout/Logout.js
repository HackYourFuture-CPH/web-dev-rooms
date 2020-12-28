import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {
  const { logout } = useContext(UserContext);
  const history = useHistory();
  logout();
  history.push('/');
  return null;
}
