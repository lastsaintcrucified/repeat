import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../utils/safe-area.component";
import { Text } from "react-native";
import { Button } from "react-native-paper";

import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantContextProvider } from "../../services/restaurnts/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouriteContextProvider } from "../../services/favourites/favourites.context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "fast-food-outline",
  Settings: "settings-outline",
  Map: "map-outline",
};

const ScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button
        icon="account-off-outline"
        mode="contained"
        onPress={() => onLogout()}
      >
        Log out
      </Button>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
