import React, {useContext, useState, useEffect} from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationsContext } from "../../../services/location/location.context";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBarContainer = styled.View`
  padding: 20px;
`;

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
    const {keyword, search} = useContext(LocationsContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    //console.log(isFavouritesToggled);
    //console.log(onFavouritesToggle);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchBarContainer>
            <Searchbar inputStyle={styles.search} 
                icon = { () => 
                    <AntDesign name={ isFavouritesToggled ? "heart" :"hearto"} size={22} 
                        color={ "black" } /> }
                onIconPress={onFavouritesToggle}
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