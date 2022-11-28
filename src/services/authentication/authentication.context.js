import React, { useState, createContext, useEffect } from "react";
import { logInrequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    logInrequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ isLoading, error, isAuthenticated: !!user, user, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
