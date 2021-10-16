import React from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper} 
    from "../components/account.styles";
import {Image, View, Text} from "react-native";
import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
    return <AccountBackground>
            <AccountCover/>
        <AnimationWrapper>
        <LottieView 
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
        />
        </AnimationWrapper>
        <Title>MealsToGo</Title>
        <AccountContainer>
            <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress = {() => navigation.navigate("LoginScreen")}>
                Login
            </AuthButton>
            <AuthButton
                icon="email"
                mode="contained"
                onPress = {() => navigation.navigate("RegisterScreen")}>
                Register
            </AuthButton>
        </AccountContainer>
    </AccountBackground>;
};
