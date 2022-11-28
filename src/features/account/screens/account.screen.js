import React from "react";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountCover,
  AccountInfoContainer,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountInfoContainer>
        <Button
          icon="lock-open-outline"
          mode="elevated"
          onPress={() => navigation.navigate("Login")}
          uppercase
        >
          Log in
        </Button>
        <Spacer size="medium" />
        <Button
          icon="account-check-outline"
          mode="elevated"
          onPress={() => navigation.navigate("Register")}
          uppercase
        >
          Register
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
