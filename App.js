import { StatusBar as ExpoBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import {Text} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screens";
import {theme} from "./src/infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {SafeArea} from "./src/components/utility/safe-area.component";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const isAndroid = Platform.OS === "android";

const Tab = createBottomTabNavigator(); 

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;
const Map = () => <SafeArea><Text>Map</Text></SafeArea>;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if( !oswaldLoaded || !latoLoaded ){
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
     <AuthenticationContextProvider>
              <Navigation/>
      </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoBar style="auto" />
    </>
  );
}