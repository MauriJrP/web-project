import {useContext} from 'react';
import { AuthContext } from '../context/Auth/AuthContext';

export const useAuth = () => {
  // const {auth, login} = useContext(AuthContext);

  return useContext(AuthContext);
}