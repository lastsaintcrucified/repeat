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
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

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
          buttonColor="#FF5F1F"
          loading={isLoading}
        >
          Log in
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
