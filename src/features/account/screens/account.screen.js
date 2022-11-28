import React, { useContext, useEffect } from "react";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountCover,
  AccountInfoContainer,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  const { resetSomeState } = useContext(AuthenticationContext);
  const handleLogin = () => {
    resetSomeState();
    navigation.navigate("Login");
  };
  return (
    <AccountBackground>
      <AccountCover />
      <AccountInfoContainer screen="account">
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={handleLogin}
          uppercase
          buttonColor="#FF5F1F"
        >
          Log in
        </Button>
        <Spacer size="medium" />
        <Button
          icon="account-check-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          uppercase
          buttonColor="#F4BB44"
        >
          Register
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
