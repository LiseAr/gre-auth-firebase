import { createContext, FC, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { loginRequest, logoutRequest, signInRequest } from "../services/AuthService";
import Router from 'next/router';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from "../services/firebase";

type User = {
  name: string;
  email: string;
}

type LoginData = {
  email: string;
  password: string;
}

type SignInData = {
  name: string;
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | null,
  login: (data: LoginData) => Promise<void>,
  logout: () => Promise<void>,
  signIn: (data: SignInData) => Promise<void>,
}

const AuthContext = createContext({} as AuthContextType);

const auth = getAuth(app)

const AuthProvider: FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null)

  // TODO: recuperar os dados do usuário quando ele atualiza a página
  // pois ao atualizar user perde seu valor
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged');
      console.log('user');
      console.log(user);

      if (user) {
        setUser({
          name: user.displayName,
          email: user.email
        })
      } else {
        destroyCookie(undefined, 'gre.token')
        setUser(null)
      }
    });

  }, []);

  const login = async ({ email, password }: LoginData) => {
    try {
      const { user, token } = await loginRequest({ email, password })

      if (token)
        setCookie(undefined, 'gre.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
      setUser(user)
      Router.push('/');
    } catch (error) {
      throw new Error("Error: User not exists");
    }
  }

  const logout = async () => {
    logoutRequest()
      .then(() => Router.push('/'))
  }

  const signIn = async ({ name, email, password }: SignInData) => {
    try {
      await signInRequest({ name, email, password });

      if (auth?.currentUser) {
        const _user = auth.currentUser;
        const token = await _user.getIdToken();

        const user = {
          name: _user.displayName,
          email: _user.email,
        }

        setCookie(undefined, 'gre.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })

        setUser(user)
      }

      Router.push('/dashboard');
    } catch (error) {
      throw new Error(error.message);
    }

  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }