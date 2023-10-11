import axios from "axios";

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
    checkout_date: '2023-09-28',
    adults_number: '2',
    checkin_date: '2023-09-27',
    children_ages: '5,0',
    include_adjacency: 'true',
    children_number: '2',
    page_number: '0',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1'
  },
  headers: {
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};


export const getHotels = async () => {
    try {
        console.log("working");
	const response = await axios.request(options);
	console.log(response.data);
    return response.data.result;
} catch (error) {
	console.error(error);
}
}