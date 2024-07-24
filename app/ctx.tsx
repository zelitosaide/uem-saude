import React from "react";
import { useStorageState } from "./useStorageState";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";

const AuthContext = React.createContext<{
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  resetPassword: (email: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
} | any>({
  signUp: () => null,
  signIn: () => null,
  signOut: () => null,
  resetPassword: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  async function signUp(email: string, password: string, confirmPassword: string) {
    const error: { errorMessage?: string } = {};
    try {
      if (password !== confirmPassword) {   
        error.errorMessage = "As senhas não coincidem";               
        return error;
      } 
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSession(userCredential.user.email);
      return userCredential;
    } catch (err: any) {
      error.errorMessage = returnError(err);
      return error;
    }
  }

  async function signIn(email: string, password: string) {
    const error: { errorMessage?: string } = {};
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSession(userCredential.user.email);
      return userCredential;
    } catch (err: any) {
      error.errorMessage = returnError(err);
      return error;
    }
  }

  async function resetPassword(email: string) {
    const error: { errorMessage?: string } = {};
    try {
      await sendPasswordResetEmail(auth, email);
      return { ok: true };
    } catch (err: any) {
      error.errorMessage = returnError(err);
      return error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setSession(null);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut: logout,
        resetPassword,
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
function returnError(err: any): string | undefined {
  console.log(err);
  // console.log(err.message);
  switch (err.message) {
    case "Firebase: Error (auth/invalid-email).":
      return "Endereço de email inválido.";
    case "Firebase: Error (auth/missing-password).":
      return "A senha é obrigatória";
    case "Firebase: Error (auth/email-already-in-use).":
      return "Este e-mail já está em uso";
    case "Firebase: Error (auth/invalid-credential).":
      return "Senha ou e-mail inválido.";
    case "Firebase: Error (auth/missing-email).":
      return "O endereço de email é obrigatório";
    default:
      return "Erro. Tente novamente";
  }
}

