import React, {useContext} from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const FavoritesWrapper = styled.View`
    padding: ${props => props.theme.space[2]};
`;

const FavoritesList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    }
  })``;

const FavoritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;

export const FavoritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext);

    return (
        favourites.length ? 
        <FavoritesWrapper>
            <FavoritesList 
                data={favourites}
                keyExtractor = { item => item.item.name}
                renderItem={(item) => 
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant:item.item} ) }>
                    <RestaurantInfo restaurant={item.item}/> 
                </TouchableOpacity>
            }
            />
        </FavoritesWrapper>
        :
        <FavoritesArea>
            <Text variant="label">No favourites yet</Text>
        </FavoritesArea>
    );
}