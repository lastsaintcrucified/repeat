import React from "react";
import { Text } from "../../../components/typography/text.component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import styled from "styled-components/native";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;
const CompactContainer = styled.View`
  border-radius: 100px;
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const MapCallOut = ({ restaurant }) => {
  const Pic = isAndroid ? CompactWebView : CompactImage;
  return (
    <CompactContainer>
      <Pic
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <Text variant="caption">{restaurant.name}</Text>
    </CompactContainer>
  );
};
