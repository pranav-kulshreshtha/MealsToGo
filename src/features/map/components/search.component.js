import React, {useContext, useState, useEffect} from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import {LocationsContext} from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position:absolute;
  z-index:999;
  top:30px;
  width:100%;
`;

export const Search = () => {
    const {keyword, search} = useContext(LocationsContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchBarContainer>
            <Searchbar inputStyle={styles.search} 
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {search(searchKeyword);} }
                onChangeText={(text)=>{ setSearchKeyword(text); }}
                />
        </SearchBarContainer>
    );
};

const styles = StyleSheet.create({
    search: {
        width: "80%",
      },
});