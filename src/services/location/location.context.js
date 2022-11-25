import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      //don't do anything
      return;
    }
    setTimeout(() => {
      locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((res) => {
          setIsLoading(false);
          console.log("locContRes-->", res);
          setLocation(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, search: onSearch, location, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
