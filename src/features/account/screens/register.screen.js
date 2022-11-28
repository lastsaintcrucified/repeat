import React from "react";
import { Text } from "../../../components/typography/text.component";
import { AccountBackground, AccountCover } from "../components/account.styles";

export const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text>Register</Text>
    </AccountBackground>
  );
};
