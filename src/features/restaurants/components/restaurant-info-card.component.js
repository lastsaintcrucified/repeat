import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Address,
  Icon,
  Info,
  Opening,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  SvgRow,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    rating,
    photos,
    isOpenNow,
    isClosedTemporarily,
    icon,
    address,
  } = restaurant;

  const ratingArray = Array.from(Array(Math.floor(rating)).keys());
  // console.log("ratingArray->", ratingArray);
  return (
    <RestaurantCard elevation={2}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <SvgRow>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml key={Math.random()} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Opening>
            {isOpenNow && (
              <>
                <Icon source={{ uri: icon }} />
                <Spacer position="left" size="large" />
                <SvgXml xml={open} width={20} height={20} />
              </>
            )}
            <Spacer position="left" size="large" />
            {isClosedTemporarily && (
              <>
                <Spacer position="left" size="large" />
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </>
            )}
          </Opening>
        </SvgRow>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
