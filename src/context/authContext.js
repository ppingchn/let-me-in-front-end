import { createContext, useContext, useEffect, useState } from 'react';
import { registerApi, loginApi } from '../api/registerApi';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const fetchMe = async () => {};
  const login = async (input) => {
    await loginApi(input);
  };
  const register = async (input) => {
    await registerApi(input);
  };
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ user, register, login }}>
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
