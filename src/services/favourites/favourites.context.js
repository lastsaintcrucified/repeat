import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
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
    loadFavourites();
  }, []);
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
