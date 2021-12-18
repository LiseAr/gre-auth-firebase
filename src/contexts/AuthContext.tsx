import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextType)

// guarda a informação se o usuário está autenticado ou não
export function AuthProvider({ children }) {

  const isAuthenticated = false;

  async function signIn() {

  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}