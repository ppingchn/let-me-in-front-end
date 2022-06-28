import { createContext, useContext, useEffect, useState } from 'react';
import { registerApi, loginApi } from '../api/registerApi';
import { getAccessToken, setAccessToken } from '../service/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const fetchMe = async () => {};
  const login = async (input) => {
    const res = await loginApi(input);
    setAccessToken(res.data.token);
  };
  const register = async (input) => {
    await registerApi(input);
  };
  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
  };
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
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
