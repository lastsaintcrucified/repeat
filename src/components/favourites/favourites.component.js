import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import styled from "styled-components/native";
import { FavouriteContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const isFavourite = favourites.find((x) => x.placeId === restaurant.placeId);
  const handlePress = () =>
    !isFavourite
      ? addToFavourites(restaurant)
      : removeFromFavourites(restaurant);
  return (
    <FavouriteButton onPress={handlePress}>
      <Ionicons
        name={isFavourite ? "heart" : "heart-outline"}
        size={28}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
