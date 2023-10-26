import axios from "axios";


export const getDestinations = async (location) => {
    const headers = {
        'X-API-KEY': '10859bbd384ce9d3ebb3c2663dddef1c7adef465',
        'Content-Type': 'application/json',
      };
    
      const data = {
        q: 'places to visit in '+ location,
        gl: 'lk',
      };
    
try {
        const response = await axios.post('https://google.serper.dev/places', data, {
          headers,
        });

        return response.data.places;

      } catch (error) {
        console.error('Error:', error);
}

}