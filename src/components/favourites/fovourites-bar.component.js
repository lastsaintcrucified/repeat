import React from "react";
import { ScrollView } from "react-native";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../../features/restaurants/components/compact-restaurant-info.component";
import styled from "styled-components/native";

const FavouritesWrapper = styled.View`
  padding: 5px;
`;
const InfoWrapper = styled.View`
  margin-right: 10px;
`;
export const FavouritesBar = ({ favourites }) => {
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((fav) => {
          return (
            <InfoWrapper key={fav.name}>
              <CompactRestaurantInfo ismap={false} restaurant={fav} />
            </InfoWrapper>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
