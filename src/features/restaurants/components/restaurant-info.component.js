import React from "react";
import {Image} from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/Open";
import {Text} from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {RestaurantCard, RestaurantCardCover, Info, Address,
          Rating, Icons} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({restaurant}) => {
  //console.log("Inside restaurant info restaurant : ");
  //console.log(restaurant);

  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "Chandni Chowk",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant.item || restaurant;

  //console.log("Restaurant component : ");
  //console.log(restaurant.item.photos[0]);

  const ratingArray = Array.from( new Array( Math.floor(rating) ) );

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant}/>
      <RestaurantCardCover source={{uri:photos[0]}} key={name}/>
      <Info>
        <Text variant="label">{name}</Text>
        <Icons>
          <Rating>
            { ratingArray.map((item, index) => 
              <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20}/>
            )}
          </Rating>
          { isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text> }
          { isOpenNow && <SvgXml xml={open} width={35} height={35}/>}
          <Image source={{uri:icon}} style={{ width: 20, height: 20 }}/>
        </Icons>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  )
  
};
