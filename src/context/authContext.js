import { createContext, useContext, useEffect, useState } from 'react';
import { registerApi } from '../api/registerApi';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const fetchMe = async () => {};
  const register = async (input) => {
    console.log(input);
    console.log('register check');
    await registerApi(input);
  };
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ user, register }}>
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
