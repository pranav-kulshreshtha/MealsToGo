import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";

const CalloutWrapper = styled.View`
    align-items:center;
`;

const MyText = styled.Text``;

const CalloutImage = styled.Image`
    height: 100px;
    width: 100px;
`;

export const MapCallout = ({restaurant}) => {
    //console.log("Callout restaurant image : ");
    //console.log(restaurant.photos[0]);

    return (
        <CompactRestaurantInfo restaurant={restaurant}/>
    );
};