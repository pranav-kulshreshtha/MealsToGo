import React, {createContext, useState, useEffect, useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
    const {user} = useContext(AuthenticationContext);
    const {uid} = user;
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        }
        catch(e){
            console.log(e);
        }
    };

    const loadFavourites = async (value) => {
        try{
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if( value !== null ){
                setFavourites(JSON.parse(value));
            }
        }
        catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        if(user){
            loadFavourites();
        }
    }, [user]);

    useEffect(() => {
        if( user && user.uid && favourites.length ){
            saveFavourites(favourites);
        }
    }, [favourites, user]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.item.placeId !== restaurant.item.placeId
        );
        setFavourites(newFavourites);
    };

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites:add,
                removeFromFavourites:remove,
            }}>
            {children}
        </FavouritesContext.Provider>
    );
};