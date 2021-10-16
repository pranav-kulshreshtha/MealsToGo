import React from "react";
import {View, Text} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";
import { LoginScreen } from "../../features/accounts/screens/login.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="AccountScreen" component={AccountScreen} /> 
        <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
    </Stack.Navigator>
);

