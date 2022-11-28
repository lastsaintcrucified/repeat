import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountInfoContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AlertComponent } from "../../../components/Alert/alert.component";

export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountInfoContainer>
        <AlertComponent message={error && error.message} />
        <TextInput
          label="Email"
          mode="flat"
          underlineColor="#FF5F1F"
          activeUnderlineColor="#FF5F1F"
          textContentType="email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          right={<TextInput.Icon icon="email-outline" iconColor="#FF5F1F" />}
        />
        <Spacer variant="medium" />
        <TextInput
          label="Password"
          mode="flat"
          underlineColor="#FF5F1F"
          activeUnderlineColor="#FF5F1F"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidden}
          right={
            <TextInput.Icon
              icon={hidden ? "eye-outline" : "eye-off-outline"}
              iconColor="#FF5F1F"
              onPress={() => setHidden(!hidden)}
            />
          }
        />
        <Spacer variant="large" />
        <Spacer variant="large" />
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
          uppercase
          buttonColor="#FF5F1F"
        >
          Log in
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
