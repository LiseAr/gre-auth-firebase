import app from "../services/firebase";

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  getAuth, 
  signOut,
  updateProfile } from "@firebase/auth";

type LoginRequestData = {
  email: string;
  password: string;
}

type SignInRequestData = {
  name: string;
  email: string;
  password: string;
}

const auth = getAuth(app)

export const loginRequest = async ({email, password}: LoginRequestData) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    const token = await response.user.getIdToken();
    const user = response.user;

    if (response.user && token){
      return {
        token: token,
        user: {
          name: user.displayName,
          email: user.email
        }
      }
    }
  } catch (error) {
    throw new Error("Error: User not exists");
  }

}

export async function logoutRequest() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error)
  }
}

export async function signInRequest({name, email, password}: SignInRequestData) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result.user){
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
      } catch (error) {
        throw new Error(error.message);
      }
    }
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      throw new Error('Email já está em uso.');
    }
  }
}