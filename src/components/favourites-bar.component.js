import React from "react";
import styled from "styled-components/native";
import { Text } from "./typography/text.component";
import { ScrollView } from "react-native";
import { CompactRestaurantInfo } from "./restaurants/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
    padding:10px;
    height: 180px;
`;

export const FavouritesBar = ({favourites}) => {
    
    return (
    <FavouritesWrapper>
        <Text variant="caption">Favourites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         { favourites.map((restaurant) => {
             const key = restaurant.item.name;
             return (
                    <CompactRestaurantInfo margins="10px" key={key} restaurant={restaurant.item}/>
             );
         } ) }
        </ScrollView>
    </FavouritesWrapper>
    );
} ;