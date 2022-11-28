import React from "react";
import { Text } from "../../../components/typography/text.component";
import { AccountBackground, AccountCover } from "../components/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text>Log in</Text>
    </AccountBackground>
  );
};
