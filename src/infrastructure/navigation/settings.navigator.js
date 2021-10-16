import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingStack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>  
            <SettingStack.Screen options={{ header: () => null, }}
                name="SettingsScreen" component={SettingsScreen} />
            <SettingStack.Screen name="Favorites" component={FavoritesScreen} />
        </SettingStack.Navigator>
    );
}