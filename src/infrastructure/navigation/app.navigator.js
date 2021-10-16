import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SettingsNavigator } from "./settings.navigator";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationsContextProvider } from "../../services/location/location.context";


const Tab = createBottomTabNavigator();
 
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown:false,
  };
};

export const AppNavigator = () => {

  return (
    <FavouritesContextProvider>
        <LocationsContextProvider>
          <RestaurantsContextProvider>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
    </RestaurantsContextProvider>
    </LocationsContextProvider>
    </FavouritesContextProvider>
  )
};