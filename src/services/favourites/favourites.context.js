import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };
  const add = (retaurant) => {
    setFavourites([...favourites, retaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user && user.uid) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
