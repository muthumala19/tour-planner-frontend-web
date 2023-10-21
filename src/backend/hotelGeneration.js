import axios from "axios";


export const getHotels = async (cin, cout, adult, child) => {
  const test1={
    
  };

    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
        params: {
            units: 'metric',
            room_number: '1',
            longitude: '79.8612',
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
            'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };


    try {
        console.log("working");
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
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
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