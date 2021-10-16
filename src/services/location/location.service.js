import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    //console.log("inside location request");
    return new Promise( (resolve, reject) => {
        const locationMock = locations[searchTerm];
        if(!locationMock){
            reject("not found");
        }
        //console.log("found and resolving");
        resolve(locationMock);
    } );
};

export const locationTransform = (result) => {
    //console.log("inside tramsform");
    const formattedResponse = camelize(result.results[0]);
    const {geometry = {} } = formattedResponse;
    const {lat, lng} = geometry.location;
    //console.log("transform done");
    //console.log(geometry.location);
    return {lat, lng, viewport:geometry.viewport};
};