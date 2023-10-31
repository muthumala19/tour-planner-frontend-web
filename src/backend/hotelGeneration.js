import axios from "axios";
import { getGeoLocation } from "./getGeoLocation";

const endPoint = "http://localhost:5000/api/hotel/"

export const getHotels = async (cin, cout, adult, child, lc) => {
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
        params: {
            units: 'metric',
            room_number: '1',
            longitude: '80.8612',
            latitude: '6.9271',
            filter_by_currency: 'AED',
            order_by: 'class_descending',
            locale: 'en-gb',
            checkout_date: cout,
            adults_number: adult,
            checkin_date: cin,
            children_ages: '5,0',
            include_adjacency: 'true',
            children_number: child,
            page_number: '0',
            categories_filter_ids: 'class::2,class::4,free_cancellation::1'
        },
          headers: {
    'X-RapidAPI-Key': 'b2e87b87a2msh1f7b0873deee4f5p1e24f7jsnc8644af3ecda',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
        // headers: {
        //     'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
        //     'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        // }
    };


    try {
        //get the geo location of the destination
        const geoLoc = await getGeoLocation(lc);
        //console.log(geoLoc.longitude,geoLoc.latitude); 

        //update the options with the geo location
        options.params.longitude = geoLoc.longitude;
        options.params.latitude = geoLoc.latitude;

        const response = await axios.request(options);
        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error(error);
    }
}


export const getHotelData = async (hotel_id) => {
  const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
    params: {
      hotel_id: hotel_id,
      locale: 'en-gb'
    },
headers: {
    'X-RapidAPI-Key': 'b2e87b87a2msh1f7b0873deee4f5p1e24f7jsnc8644af3ecda',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
  };
    try {
    const response = await axios.request(options);
      return response.data;
  } catch (error) {
    console.error(error);
  }
}


export const getUserHotel = async (id) => {
      try {
      const response = await axios.get(`${endPoint}/getAllhotels/${id}`);
      console.log(response)
      return response.data;
  } catch (error) {
    console.error(error);
  }
}


export const postHotels = async (hotel) => {
      try {
      const response = await axios.post(endPoint, hotel);
      console.log(response)
      return response.data;
  } catch (error) {
    console.error(error);
  }
}