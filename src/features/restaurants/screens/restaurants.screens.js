import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import {RestaurantInfo} from "../components/restaurant-info.component";
import styled from "styled-components";

const SearchBarContainer = styled.View`
  padding: 20px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <View style={{flex:1}}>
        <SearchBarContainer>
          <Searchbar inputStyle={styles.search} />
        </SearchBarContainer>
        <RestaurantList
          data = {[{name:"A"}, {name: "B"},{name:"C"}, {name: "D"},{name:"E"}, {name: "F"},{name:"G"}, {name: "H"},{name:"I"}, {name: "J"},{name:"K"}, {name: "L"}]}
          renderItem = {() => <RestaurantInfo />}
          keyExtractor = {(item) => item.name}
          contentContainerStyle = {{padding : 16}}
        />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    width: "80%",
  },
});