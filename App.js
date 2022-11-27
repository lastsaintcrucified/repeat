import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurnts/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
