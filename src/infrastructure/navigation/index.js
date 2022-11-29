import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log(isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
