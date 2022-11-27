import React from "react";
import { CompactRestaurantInfo } from "../../restaurants/components/compact-restaurant-info.component";

export const MapCallOut = ({ restaurant }) => (
  <CompactRestaurantInfo isMap={true} restaurant={restaurant} />
);
