import React, { useState, createContext } from "react";
import { logInrequest, registerRequest } from "./authentication.service";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase.service";

export const AuthenticationContext = createContext();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const resetSomeState = () => {
    setError(null);
    setIsLoading(false);
  };
  const onLogin = (email, password) => {
    setIsLoading(true);
    logInrequest(auth, email, password)
      .then((u) => {
        setUser(u);
        console.log("logged in");
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        setIsLoading(false);
      });
  };
  const onRegistration = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError("Error:Passwords do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        console.log("Registered");
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        setIsLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        isAuthenticated: !!user,
        user,
        onLogin,
        onRegistration,
        resetSomeState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
