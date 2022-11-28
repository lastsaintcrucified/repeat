import React from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountInfoContainer = styled.View`
  ${({ screen }) =>
    screen !== "account" &&
    `
  width:80%;
  `}
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
`;
