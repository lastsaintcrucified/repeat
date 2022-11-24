import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantContext } from "../../../services/restaurnts/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={40} animating={true} color={MD2Colors.orange300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar icon="heart-outline" />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
