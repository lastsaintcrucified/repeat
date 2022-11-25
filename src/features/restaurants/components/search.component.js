import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

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
        icon="heart-outline"
      />
    </SearchContainer>
  );
};
