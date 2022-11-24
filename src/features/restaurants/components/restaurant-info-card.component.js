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
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isOpenNow = true,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some street behind there",
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
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
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            {isClosedTemporarily && (
              <>
                <Icon source={{ uri: icon }} />
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
