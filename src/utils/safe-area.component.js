import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `padding-top:${StatusBar.currentHeight}px`};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-direction: column;
`;
