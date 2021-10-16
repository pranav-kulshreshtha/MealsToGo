import React, {useState, createContext, useEffect, useContext} from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service"
import {LocationsContext} from "../location/location.context"

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationsContext);

    const retrieveRestaurants = (location) => {
        setIsLoading(true); 
        setTimeout(() => {
            restaurantsRequest(location).then(restaurantsTransform).then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            }).catch(err => {
                setIsLoading(false);
                setError(err);
            } )
        }, 2000);
    };

    useEffect(() => {
    if(location){
        const locationString = `${location.lat},${location.lng}`;
        retrieveRestaurants(locationString);
        }
        else{ console.log("No locations yet"); }
    }, [location]);

    return (
    <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
        {children}
    </RestaurantsContext.Provider>
    );
};