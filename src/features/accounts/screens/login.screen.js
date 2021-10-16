import React, {useState, useContext} from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountBackground, AccountCover, AccountContainer, AuthInput, AuthButton, Title, ErrorContainer}
     from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";


export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin, isLoading, error} = useContext(AuthenticationContext);

    return (<AccountBackground>
        <Title>MealsToGo</Title>
        <AccountCover />
        <AccountContainer>
            <AuthInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autocapitalize="none"
                onChangeText = {(u) => setEmail(u)} 
            />
            <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autocapitalize="none"
                secure
                onChangeText = {(p) => setPassword(p)} 
            />
            <ErrorContainer><Text variant="error">{error}</Text></ErrorContainer>
            {   !isLoading ? 
                <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email,password)}>
                Login
                </AuthButton>
                :
                <ActivityIndicator animating={true} color={Colors.blue300} />
            }
        </AccountContainer>
        <AuthButton
                mode="contained"
                onPress = {() => navigation.goBack() }>
                Back
        </AuthButton>
    </AccountBackground>);
};