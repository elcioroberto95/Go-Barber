import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}
interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Gobarber:token");
    const user = localStorage.getItem("@Gobarber:usuario");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    } else {
      return {} as AuthState;
    }
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@Gobarber:token", token);
    localStorage.setItem("@Gobarber:usuario", JSON.stringify(user));
    setData({
      token: response.data.token,
      user: response.data.user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Gobarber:token");
    localStorage.removeItem("@Gobarber:usuario");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be witin AuthProvider");
  }
  return context;
}
export { useAuth, AuthContextProvider };
