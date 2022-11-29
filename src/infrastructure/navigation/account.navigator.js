import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegistrationScreen } from "../../features/account/screens/register.screen";

const AccountStack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={{ animation: "slide_from_bottom" }}>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <AccountStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AccountStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};
