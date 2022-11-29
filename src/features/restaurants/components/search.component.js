import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: 2px;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
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
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        iconColor="#F08000"
        onIconPress={onFavouritesToggled}
      />
    </SearchContainer>
  );
};
