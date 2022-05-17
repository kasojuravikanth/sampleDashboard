import { createContext, ReactElement, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../component/Auth/LocalStorage";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = createContext("");

interface Props {
  children: "";
  AuthContext: ReactElement;
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
  value: any;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    navigate("/dashboard");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return (
    <AuthContext.Provider value={children}>{children}</AuthContext.Provider>
  );
};
