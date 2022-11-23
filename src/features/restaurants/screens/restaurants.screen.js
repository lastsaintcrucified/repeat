import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `padding-top:${StatusBar.currentHeight}px`};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-direction: column;
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar icon="heart-outline" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
