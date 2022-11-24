import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Rating = styled.View`
  flex: 5;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Opening = styled.View`
  flex: 5;
  flex-direction: row-reverse;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const SvgRow = styled.View`
  flex-direction: row;
  align-content: space-between;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
