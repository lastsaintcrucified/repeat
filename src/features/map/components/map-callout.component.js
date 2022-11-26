import React from "react";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;
const CompactContainer = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
export const MapCallOut = ({ restaurant }) => {
  return (
    <CompactContainer>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </CompactContainer>
  );
};
