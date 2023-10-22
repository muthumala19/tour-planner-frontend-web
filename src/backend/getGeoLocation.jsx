import axios from 'axios';

export const getGeoLocation = async (location) => {
    const params={
        api_key: "API KEY",
        q: location,
        type: "city",
        country_code: "lk"
      };

      try {
        console.log("working");
        // make the http GET request to Scale SERP
        const response = await axios.get('https://api.scaleserp.com/locations', { params });
        
        const jsonData = response.data;
        const latitude = jsonData.locations[0].gps_coordinates.latitude;
        const longitude = jsonData.locations[0].gps_coordinates.longitude;
 
        //console.log(latitude,longitude);
        return {latitude, longitude};
      } catch (error) {
        // catch and print the error
        console.error(error);
      }
};
