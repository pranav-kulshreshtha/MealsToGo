import React, {useContext, useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const Activity = styled.View`
  justify-content: center;
  flex: 1;
`;

export const RestaurantScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  //console.log("Favourites : ");
  //console.log(favourites);

  return (
    <SafeArea>
      <View style={{flex:1}}>
        <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled) } />
        { isToggled && favourites.length ? <FavouritesBar favourites={favourites} /> : null}
        {
          isLoading ? 
          <Activity><ActivityIndicator animating={true} color={"red"} size={"large"}/></Activity>
          :
          <RestaurantList
            data = {restaurants}
            renderItem = {(item) => {
              return (
              <TouchableOpacity onPress={() => {navigation.navigate("RestaurantDetail", {restaurant:item}) }}>
                <FadeInView>
                  <RestaurantInfo restaurant={item}/>
                </FadeInView>
              </TouchableOpacity>
              );
            }}
            keyExtractor = {(item) => item.name}
            contentContainerStyle = {{padding : 16}}
          />
        }
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  
});