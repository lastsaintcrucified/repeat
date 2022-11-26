import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Search } from "../components/search.component";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurnts/restaurants.context";
import { MapCallOut } from "../components/map-callout.component";
import { Callout } from "react-native-maps";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const tempLatDelta = northeastLat - southwestLat;
    setLatDelta(tempLatDelta);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={index}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.latlng.lat,
                longitude: restaurant.latlng.lng,
              }}
              description={restaurant.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCallOut restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
