import React, { useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const ListItem = styled(List.Item).attrs({
  titleStyle: {
    color: "tomato",
  },
})``;
const leftProps = (props, iconName) => {
  return <List.Icon {...props} color="tomato" icon={iconName} />;
};

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Section title="">
        <List.Accordion
          title="Breakfast"
          left={(props) => leftProps(props, "bread-slice-outline")}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <ListItem title="Toast with egg yolk" />
          <ListItem title="Pancake" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => leftProps(props, "food-drumstick-outline")}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <ListItem title="Dum biriyani" />
          <ListItem title="Rice with chicken" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => leftProps(props, "pot-steam-outline")}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <ListItem title="Beef kebab" />
          <ListItem title="Chicken kebab" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => leftProps(props, "cup-outline")}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        >
          <ListItem title="Soda" />
          <ListItem title="Fresh juice" />
        </List.Accordion>
      </List.Section>
    </SafeArea>
  );
};
