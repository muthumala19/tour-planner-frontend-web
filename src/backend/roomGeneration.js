import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/room-list',
  params: {
    hotel_id: '1115841',
    currency: 'USD',
    checkout_date: '2023-09-24',
    locale: 'en-gb',
    checkin_date: '2023-09-22',
    adults_number_by_rooms: '4',
    units: 'metric'
  },
  headers: {
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

export const getRooms = async () => {
    try {
	const response = await axios.request(options);
    return response.data[0].rooms;
} catch (error) {
	console.error(error);
}
}