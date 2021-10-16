import React, {useState, useContext} from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthInput, AuthButton, Title } 
        from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";


export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {onRegister, isLoading, error} = useContext(AuthenticationContext);
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
            <AuthInput
                label="Repeated Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                autocapitalize="none"
                secure
                onChangeText = {(rep) => setRepeatedPassword(rep)} 
            />
            <Text variant="error">{error}</Text>
            { !isLoading ? <AuthButton
                icon="email"
                mode="contained"
                onPress={() => onRegister(email,password, repeatedPassword)}>
                Register
            </AuthButton> :
            <ActivityIndicator animating={true} color={Colors.blue300} />
            }
        </AccountContainer>
        <AuthButton
                mode="contained"
                onPress = {() => navigation.goBack() }>
                Back
        </AuthButton>
    </AccountBackground>);
}