import axios from "axios";
import { getGeoLocation } from "./getGeoLocation";


export const getVehicles = async (cin, cout, lc) => {
    const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/car-rental/search',
  params: {
    currency: 'USD',
    drop_off_latitude: '6.9271',
    sort_by: 'recommended',
    drop_off_datetime: `${cout} 14:00:00`,
    from_country: 'it',
    pick_up_latitude: '6.9271',
    locale: 'en-gb',
    pick_up_datetime: `${cin} 16:00:00`,
    drop_off_longitude: '79.8612',
    pick_up_longitude: '79.8612'
  },
headers: {
    'X-RapidAPI-Key': 'b2e87b87a2msh1f7b0873deee4f5p1e24f7jsnc8644af3ecda',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
  // headers: {
  //   'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
  //   'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  // }
};
    try {
              const geoLoc = await getGeoLocation(lc);
        //console.log(geoLoc.longitude,geoLoc.latitude);

        //update the options with the geo location
        options.params.drop_off_longitude = geoLoc.longitude;
        options.params.drop_off_latitude = geoLoc.latitude;

        options.params.pick_up_longitude = geoLoc.longitude;
        options.params.pick_up_latitude = geoLoc.latitude;

        const response = await axios.request(options);
        console.log("working");
        return response.data.search_results;
    } catch (error) {
        console.error(error);
    }
}