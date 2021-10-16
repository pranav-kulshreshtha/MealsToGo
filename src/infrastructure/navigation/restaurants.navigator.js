import React from "react";
import {Text} from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screens";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurantDetail.screens";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ ...TransitionPresets.ModalPresentationIOS,headerShown:false}}>
            <RestaurantStack.Screen name="RestaurantsScreen" component={RestaurantScreen}/>
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetail}/>
        </RestaurantStack.Navigator>
    );
};