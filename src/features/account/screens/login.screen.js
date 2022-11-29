import React, { useState, useContext, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountInfoContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const handleButtonPress = () => {
    setisLoading(true);
    onLogin(email, password);
  };
  useEffect(() => {
    error && setisLoading(false);
  }, [error]);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountInfoContainer>
        <TextInput
          label="Email"
          mode="flat"
          underlineColor="#F08000"
          activeUnderlineColor="#F08000"
          textContentType="email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          right={<TextInput.Icon icon="email-outline" iconColor="#F08000" />}
        />
        <Spacer variant="medium" />
        <TextInput
          label="Password"
          mode="flat"
          underlineColor="#F08000"
          activeUnderlineColor="#F08000"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidden}
          right={
            <TextInput.Icon
              icon={hidden ? "eye-outline" : "eye-off-outline"}
              iconColor="#F08000"
              onPress={() => setHidden(!hidden)}
            />
          }
        />
        <Spacer variant="large" />
        {error && (
          <Spacer variant="medium">
            <Text variant="error">{error.toString()}</Text>
          </Spacer>
        )}
        <Spacer variant="large" />
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={handleButtonPress}
          uppercase
          buttonColor="#F08000"
          loading={isLoading}
        >
          Log in
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
