import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantContext } from "../../../services/restaurnts/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/fovourites-bar.component";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { LocationContext } from "../../../services/location/location.context";
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
export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);
  const { error } = useContext(LocationContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={40} animating={true} color={MD2Colors.orange300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {error && (
        <Spacer position="left" size="medium">
          <Text variant="error">{error}</Text>
        </Spacer>
      )}
      {isToggled && <FavouritesBar favourites={favourites} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
