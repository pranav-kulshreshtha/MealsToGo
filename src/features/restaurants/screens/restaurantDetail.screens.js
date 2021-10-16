import React, {useState} from "react";
import {ScrollView} from "react-native";
import styled from "styled-components";
import {RestaurantInfo} from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";

const RestaurantDetailWrapper = styled.View`
    flex: 1;
`;

const RestaurantCardWrapper = styled.View`
    flex: 7;
    align-items:center;
`;

const DetailBox = styled.View`
    flex: 7;
`;

export const RestaurantDetail = ({route, navigation}) => {
    const { restaurant } = route.params;
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <SafeArea>
            <RestaurantDetailWrapper>
                <RestaurantCardWrapper>
                    <RestaurantInfo restaurant={restaurant}/>
                </RestaurantCardWrapper>
                <DetailBox>
                    <ScrollView>
                    <List.Section title="Meal">
                        <List.Accordion 
                            title="Breakfast"
                            expanded={breakfastExpanded}
                            onPress={() => setBreakfastExpanded(!breakfastExpanded) }
                            left = {props=> <List.Icon {...props} icon="bread-slice" />}>
                            <List.Item title="Egg Benedict"/>
                            <List.Item title="Classic Breakfast"/>
                        </List.Accordion>
                        <List.Accordion 
                            title="Lunch"
                            expanded={lunchExpanded}
                            onPress={() => setLunchExpanded(!lunchExpanded)}
                            left = {props=> <List.Icon {...props} icon="hamburger" />}>
                            <List.Item title="Burger w/ fries"/>
                            <List.Item title="Steak Sandwich"/>
                            <List.Item title="Mushroom Soup"/>
                        </List.Accordion>
                        <List.Accordion 
                            title="Dinner"
                            expanded={dinnerExpanded}
                            onPress={() => setDinnerExpanded(!dinnerExpanded) }
                            left = {props=> <List.Icon {...props} icon="food" />}>
                            <List.Item title="Spaggheti Bolognese"/>
                            <List.Item title="Veal Cutlet with Chicken Mushroom"/>
                            <List.Item title="Steak Frites"/>
                        </List.Accordion>
                        <List.Accordion 
                            title="Drinks"
                            expanded={drinksExpanded}
                            onPress={() => setDrinksExpanded(!drinksExpanded) }
                            left = {props=> <List.Icon {...props} icon="cup" />}>
                            <List.Item title="Coffee"/>
                            <List.Item title="Tea"/>
                            <List.Item title="Coke"/>
                            <List.Item title="Fanta"/>
                        </List.Accordion>
                    </List.Section>
                    </ScrollView> 
                </DetailBox>
            </RestaurantDetailWrapper>
        </SafeArea>
    );
};