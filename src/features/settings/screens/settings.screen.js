import React, {useContext} from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { FavoritesScreen } from "./favorites.screen";

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    align-items:center;
`;

export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext);
  
    return (
    <SafeArea>
    <AvatarContainer>
      <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" 
        style={{borderRadius: 100, marginVertical: 15}}/>
      <Text variant="label">{user.email}</Text>
    </AvatarContainer>
      <List.Section>
          <SettingsItem
              title = "Favourites"
              description = "View your favorites"
              left = {(props) => <List.Icon color="black" icon="heart" />}
              onPress = {() => navigation.navigate("Favorites")}
          />
          <SettingsItem
              title = "Logout"
              left = {(props) => <List.Icon color="black" icon="door"  />}
              onPress = {onLogout}
          />
      </List.Section>
    </SafeArea>
    );
  };