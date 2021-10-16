import React, {useState, useEffect, createContext} from "react";
import { locationRequest,locationTransform } from "./location.service";
import { locations } from "./location.mock";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({children}) => {
    const [location, setLocation] = useState(locations["san francisco"].results[0].geometry.location);
    const [keyword, setKeyword] = useState("san francisco");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const onSearch = (searchKeyword) => {
        //console.log("Inside onsearch");
        setKeyword(searchKeyword);
        //console.log("keyword set");
        setIsLoading(true);
        //console.log("isloading set");
    };

    useEffect(() => {
        if(!keyword.length){
            return;
        }
        locationRequest(keyword.toLowerCase()).then(locationTransform).then(result => {
            setIsLoading(false);
            setLocation(result);
            //console.log("Location set");
            //console.log(result);
        }).catch(error => {
            setIsLoading(false);
            setError(error);
            //console.log("Alarm");
        });
    }, [keyword]);

    return (
        <LocationsContext.Provider
            value={{
                isLoading,
                error, 
                location,
                search: onSearch,
                keyword,
            }}>
            {children}
        </LocationsContext.Provider>
    );
};