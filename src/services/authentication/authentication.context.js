import React, { useState, createContext, useEffect } from "react";
import { logInrequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    logInrequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setError(e);
        setIsAuthenticated(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ isLoading, error, isAuthenticated, user, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
