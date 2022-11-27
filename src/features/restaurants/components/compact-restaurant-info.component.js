import React from "react";
import { Text } from "../../../components/typography/text.component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import styled from "styled-components/native";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 80px;
  height: 80px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 80px;
  height: 80px;
`;
const CompactContainer = styled.View`
  padding: 10px;
  max-width: 80px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Pic = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <CompactContainer>
      <Pic
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <Text variant="caption">
        {restaurant.name.length > 9
          ? `${restaurant.name.slice(0, 7)}...`
          : restaurant.name}
      </Text>
    </CompactContainer>
  );
};
