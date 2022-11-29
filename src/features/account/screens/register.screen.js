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

export const RegistrationScreen = () => {
  const { onRegistration, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);

  const [isLoading, setisLoading] = useState(false);

  const handleButtonPress = () => {
    setisLoading(true);
    onRegistration(email, password, repeatPassword);
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
          underlineColor="#F4BB44"
          activeUnderlineColor="#F4BB44"
          textContentType="email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          right={<TextInput.Icon icon="email-outline" iconColor="#F4BB44" />}
        />
        <Spacer variant="medium" />
        <TextInput
          label="Password"
          mode="flat"
          underlineColor="#F4BB44"
          activeUnderlineColor="#F4BB44"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidden}
          right={
            <TextInput.Icon
              icon={hidden ? "eye-outline" : "eye-off-outline"}
              iconColor="#F4BB44"
              onPress={() => setHidden(!hidden)}
            />
          }
        />
        <Spacer variant="large" />
        <TextInput
          label="RepeatPassword"
          mode="flat"
          underlineColor="#F4BB44"
          activeUnderlineColor="#F4BB44"
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry={hidden1}
          right={
            <TextInput.Icon
              icon={hidden1 ? "eye-outline" : "eye-off-outline"}
              iconColor="#F4BB44"
              onPress={() => setHidden1(!hidden1)}
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
          buttonColor="#F4BB44"
          loading={isLoading}
        >
          Register
        </Button>
      </AccountInfoContainer>
    </AccountBackground>
  );
};
