import React, { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeArea } from "../../../utils/safe-area.component";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { useFocusEffect } from "@react-navigation/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  margin: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SafeArea>
      <Spacer position="left" size="large">
        <Spacer position="top" size="large" />
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon size={40} icon="camera" backgroundColor="black" />
        </TouchableOpacity>
      </Spacer>
      <AvatarContainer>
        {!photo && (
          <Avatar.Icon size={180} icon="camera" backgroundColor="#F08000" />
        )}
        {photo && <Avatar.Image size={180} source={{ uri: photo }} />}

        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          left={() => <List.Icon icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={() => <List.Icon icon="account-off" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
