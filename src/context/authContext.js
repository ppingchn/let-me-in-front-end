import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerApi,registerGoogleApi, loginApi, getMe } from '../api/registerApi';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../service/localStorage';
import axios from '../config/axios';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchMe = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const resMe = await getMe();
        setUser(resMe.data.user);
      }
    } catch (err) {
      removeAccessToken();
      navigate('/login');
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);

  const login = async (input) => {
    const res = await loginApi(input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const register = async (input) => {
    const res = await registerApi(input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const registerGoogle = async(input) =>{
    const res = await registerGoogleApi(input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  }

  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, register,registerGoogle, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export default AuthContextProvider;
export { useAuth };
