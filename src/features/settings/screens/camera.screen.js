import React, { useContext, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";
import { View, Pressable } from "react-native";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const AlertContainer = styled.View`
  align-items: center;
  top: 50%;
`;
const PressableContainer = styled(Pressable)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
`;
export const CameraScreen = () => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
  };
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <AlertContainer>
        <Text variant="alert">No access to camera</Text>
      </AlertContainer>
    );
  }
  return (
    <>
      <PressableContainer onPress={snap} />
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </>
  );
};
