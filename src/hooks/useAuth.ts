import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
