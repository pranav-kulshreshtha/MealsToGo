import React, {useContext} from "react";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right:25px;
    z-index:9;
`;

export const Favourite = ({ restaurant }) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);
    
    const isFavourite = favourites.find( (r) =>  restaurant.item ? r.item.placeId === restaurant.item.placeId 
        :  r.item.placeId === restaurant.placeId  );

    return (
        <FavouriteButton onPress={() => { !isFavourite ? addToFavourites(restaurant) : 
            removeFromFavourites(restaurant); console.log(favourites); } }>
            <AntDesign name={isFavourite ? "heart" : "hearto"} size={24} color={isFavourite ? "red" : "white"}/>
        </FavouriteButton>
    );
};