import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const AlertContainer = styled.View`
  align-items: center;
  top: 50%;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <SafeArea header={true}>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
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
      ) : (
        <AlertContainer>
          <Text variant="alert">No Favourites added yet!</Text>
        </AlertContainer>
      )}
    </SafeArea>
  );
};
