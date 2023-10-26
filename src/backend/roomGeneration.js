import axios from "axios";

export const getRooms = async (hotel_id, cin, cout, adult) => {
  const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/room-list',
  params: {
    hotel_id: hotel_id,
    currency: 'USD',
    checkout_date: cout,
    locale: 'en-gb',
    checkin_date: cin,
    adults_number_by_rooms: adult,
    units: 'metric'
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
	const response = await axios.request(options);
    return response.data[0].rooms;
} catch (error) {
	console.error(error);
}
}