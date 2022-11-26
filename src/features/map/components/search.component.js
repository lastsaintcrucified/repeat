import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[0]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 95%;
  align-self: center;
  border-radius: 2px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text);
        }}
        icon="map"
        iconColor="tomato"
      />
    </SearchContainer>
  );
};
